import { useEffect } from "react";
import { useMap } from "react-leaflet";
import type { Station } from "../../types/station";

interface MapZoomProps {
  stations: Station[];
  selectedId: number;
}

// Keeps zoom/center in sync with the selected station
export const MapZoom = ({ stations, selectedId }: MapZoomProps) => {
  const map = useMap();

  useEffect(() => {
    const station = stations.find((s) => s.id === selectedId);
    if (station) {
      map.flyTo([station.lat, station.lng], 10, { duration: 0.5 });
    }
  }, [selectedId, stations, map]);

  return null;
};
