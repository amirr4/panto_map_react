import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { Station } from "../../types/station";
import { MapZoom } from "./MapZoom";
import { defaultIcon, selectedIcon } from "./icons";

interface Props {
  stations: Station[];
  selectedId?: number;
  onSelect: (id: number) => void;
}

export const MapView = ({ stations, selectedId, onSelect }: Props) => {
  const center: [number, number] = [51.1657, 10.4515]; // Germany center

  return (
    <MapContainer
      center={center}
      zoom={6}
      className="h-full w-full"
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {stations.map((s) => (
        <Marker
          key={s.id}
          position={[s.lat, s.lng] as [number, number]}
          eventHandlers={{ click: () => onSelect(s.id) }}
          icon={s.id === selectedId ? selectedIcon : defaultIcon}
        >
          <Popup>{s.name}</Popup>
        </Marker>
      ))}

      {selectedId !== undefined && (
        <MapZoom stations={stations} selectedId={selectedId} />
      )}
    </MapContainer>
  );
};
