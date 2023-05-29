import * as L from "leaflet";
import { OverpassLayer } from "./overpass-layer";
import { OverpassFetcher } from "./overpass-fetcher";

const map = L.map("map").setView([43.659752, -79.378161], 10);

L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: "abcd",
  maxZoom: 21,
}).addTo(map);

const query = `way[leisure=playground](%BBOX%);
map_to_area;

foreach->.d(
   node(area.d)
     (if: is_tag("amenity") || is_tag("playground") ) -> .a;
   .a out skel;
   .a convert node
    ::=::, 
    ::id=id(),
    playground_id=d.min(id());
   out;
  
   way(area.d)[playground] -> .b;
   .b out geom;
   .b convert way
    ::=::, 
    ::id=id(),
    playground_id=d.min(id()),
    size=length();
  out;
  (.a;.b;) -> .c;  
  
  .d out geom;
  .d convert way
    ::=::,
    ::id=id(),
    playground_in=c.set(t["playground"]),
    amenity_in=c.set(t["amenity"]);
  out; 
);`;

map.addLayer(new OverpassLayer(new OverpassFetcher(query, 0.04)));

function updateHash() {
  const center = map.getCenter();
  const zoom = map.getZoom();
  window.location.hash = `#${center.lat.toFixed(4)},${center.lng.toFixed(
    4
  )},${zoom}`;
}

function setMapFromHash() {
  const hash = window.location.hash.substr(1);
  if (hash) {
    const [lat, lng, zoom] = hash.split(",");
    map.setView([parseFloat(lat), parseFloat(lng)], parseInt(zoom));
  }
}

map.on("moveend", updateHash);
map.on("zoomend", updateHash);

setMapFromHash();
