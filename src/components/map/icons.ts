import L from "leaflet";

interface IconDefaultWithPrivate extends L.Icon.Default {
  _getIconUrl?: (name: string) => string;
}

// Configure default icon URLs for bundlers (Vite/Webpack)
const defaultIconPrototype = L.Icon.Default.prototype as IconDefaultWithPrivate;
if ("_getIconUrl" in defaultIconPrototype) {
  delete defaultIconPrototype._getIconUrl;
}

L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export const defaultIcon = new L.Icon.Default();

export const selectedIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
