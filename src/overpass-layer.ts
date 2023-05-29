import * as L from "leaflet";
import { OverpassFetcher } from "./overpass-fetcher";
import $ from "../node_modules/cash-dom/dist/cash";

export class OverpassLayer extends L.FeatureGroup {
  private icons: L.Marker[] = [];
  private ids = new Map<string, object>();

  constructor(readonly fetcher: OverpassFetcher) {
    super();

    fetcher.setOverpassLayer(this);
  }

  private onScreenChanged(map: L.Map) {
    if (map.getZoom() > 15) {
      this.fetcher.fetchData(map.getBounds());
    }
  }

  public addData(data: any) {
    const ways = {};
    const nodes = {};

    data.elements.forEach((element: any) => {
      if (element.type === "way") {
        ways[element.id] = { ...ways[element.id], ...element };
      }
      if (element.type === "node") {
        nodes[element.id] = { ...nodes[element.id], ...element };
      }
    });

    Object.keys(ways).forEach((key: any) => {
      const element = ways[key];
      // Skip if already added to the map
      if (this.ids["w" + element.id] !== undefined) {
        return;
      }
      this.ids["w" + element.id] = element;

      if (element.geometry) {
        const coordinates: L.LatLngLiteral[] = element.geometry.map(
          (geometry: any) => ({
            lat: geometry.lat,
            lng: geometry.lon,
          })
        );

        if (element.tags.leisure === "playground") {
          const polygon = L.polygon(coordinates, {
            color: "blue",
            fillOpacity: 0.4,
          });

          this.addLayer(polygon);
        } else {
          const polygon = L.polygon(coordinates, {
            color: "yellow",
            fillOpacity: 0.4,
          });

          this.addLayer(polygon);
        }
      }
    });

    Object.keys(nodes).forEach((key: any) => {
      const element = nodes[key];
      // Skip if already added to the map
      if (this.ids["n" + element.id] !== undefined) {
        return;
      }
      this.ids["n" + element.id] = element;

      if (element.lat && element.lon && element.tags) {
        const marker = L.marker([element.lat, element.lon], {
          icon: new L.DivIcon({
            html:
              "<div class='playgroundIcon " +
              this.getClassName(element.tags) +
              "'></div>",
          }),
        });
        if (element) {
          marker.bindPopup(JSON.stringify(element.tags));
        }
        this.icons.push(marker);

        this.addLayer(marker);
      }
    });
  }

  private getClassName(tags: object) {
    if (tags["amenity"] !== undefined) {
      return "icon-amenity-" + tags["amenity"] + " icon-amenity-default";
    }
    if (tags["playground"] !== undefined) {
      return (
        "icon-playground-" + tags["playground"] + " icon-playground-default"
      );
    }
    return "";
  }

  public onAdd(map: L.Map) {
    // FIXME: clean in onRemove
    console.log("added");
    const self = this;
    map.on("zoomend", () => {
      self.onScreenChanged(map);
      const zoom = map.getZoom();
      const size = Math.pow(2, Math.max(zoom - 14, 1));
      this.icons.forEach((marker) => {
        const icon = marker.getIcon();
        icon.options.iconAnchor = [size / 2, size / 2];
        icon.options.iconSize = [size, size];
        marker.setIcon(marker.getIcon());
      });

      $(".playgroundIcon").css("width", size + "px");
      $(".playgroundIcon").css("height", size + "px");
    });
    map.on("dragend", () => {
      self.onScreenChanged(map);
    });
    return this;
  }

  public onRemove(map: L.Map) {
    console.log("on remove");
    return this;
  }
}
