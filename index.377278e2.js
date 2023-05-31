//var css = require('./style.css');
// Import the leaflet package
var map = L.map("map").setView([
    43.659752,
    -79.378161
], 20);
L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 21
}).addTo(map);
// Adds a popup marker to the webmap for GGL address
L.circleMarker([
    43.659752,
    -79.378161
]).addTo(map).bindPopup("MON 304<br>Monetary Times Building<br>341 Victoria Street<br>Toronto, Ontario, Canada<br>M5B 2K3<br><br>Tel: 416-9795000 Ext. 5192").openPopup();

//# sourceMappingURL=index.377278e2.js.map
