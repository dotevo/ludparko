import * as L from "leaflet";
import { DownloadQueue } from "./download-queue";
import { OverpassLayer } from "./overpass-layer";

function toOverpassString(bbox: L.LatLngBounds) {
  const a = bbox.getSouthWest();
  const b = bbox.getNorthEast();
  return [
    Math.round(a.lat * 1000) / 1000 + 0.0001,
    Math.round(a.lng * 1000) / 1000 + 0.0001,
    Math.round(b.lat * 1000) / 1000 - 0.0001,
    Math.round(b.lng * 1000) / 1000 - 0.0001,
  ].join(",");
}

export class OverpassFetcher {
  private hashMap = new Map<string, boolean>();
  private downloadQueue = new DownloadQueue();
  private layer: OverpassLayer;

  constructor(readonly query: string, readonly delta) {}

  // FIXME: It is not "any" array (create an type)
  private getTiles(bounds: L.LatLngBounds): any[] {
    const tn = Math.ceil((bounds.getNorth() + 90) / this.delta);
    const ts = Math.floor((bounds.getSouth() + 90) / this.delta);
    const te = Math.ceil((bounds.getEast() + 180) / this.delta);
    const tw = Math.floor((bounds.getWest() + 180) / this.delta);
    const retArr = [];
    for (let i = ts; i < tn; i++) {
      for (let j = tw; j < te; j++) {
        retArr.push([i, j]);
      }
    }
    return retArr;
  }

  private downloadTile(
    x: number,
    y: number,
    callback: (data: object) => void
  ): string {
    const key = x + ":" + y;
    if (this.hashMap[key] === true) {
      console.log("Already downloaded (" + x + ":" + y + ")");
      return;
    }
    // Check local storage
    const currentDate = new Date();
    const tileDate = localStorage.getItem(key + "date");
    console.log(tileDate);
    // FIXME: hardcoded cache time
    const maxCacheTime = new Date();
    maxCacheTime.setDate(currentDate.getDate() - 5);
    // Use cache
    if (
      tileDate !== undefined &&
      maxCacheTime.getTime() < new Date(tileDate).getTime()
    ) {
      const tileData = localStorage.getItem(key);
      if (tileData !== undefined) {
        console.log("Found in local storage (" + x + ":" + y + ")");
        this.hashMap[x + ":" + y] = true;
        console.log(tileData);
        callback(JSON.parse(tileData));
        return;
      }
    }

    const bs = x * this.delta - 90;
    const bw = y * this.delta - 180;
    const bbox: L.LatLngBounds = new L.LatLngBounds(
      [bs + this.delta, bw + this.delta],
      [bs, bw]
    );

    const query =
      "[out:json][timeout:25];" +
      this.query
        .replace(/%BBOX%/g, toOverpassString(bbox))
        .replace(/(\r\n|\n|\r|\\n)/gm, "");

    // Download
    this.downloadQueue.enqueue({
      input: "http://overpass-api.de/api/interpreter?data=",
      init: {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `data=${encodeURIComponent(query)}`,
      },
      callback: (data) => {
        console.log("Downloaded");
        // Save to local storage
        localStorage.setItem(key, JSON.stringify(data));
        localStorage.setItem(key + "date", new Date().toString());

        callback(data);
      },
    });
    this.hashMap[x + ":" + y] = true;
  }

  // FIXME: interface or event instead
  public setOverpassLayer(layer: OverpassLayer) {
    this.layer = layer;
  }

  public onDownloaded(data: object) {
    console.log(data);
    if (this.layer !== undefined) {
      this.layer.addData(data);
    }
  }

  public fetchData(area: L.LatLngBounds) {
    const tiles = this.getTiles(area);
    tiles.forEach((element) => {
      const [x, y] = element;
      this.downloadTile(x, y, this.onDownloaded.bind(this));
    });
  }
}
