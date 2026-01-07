import type { Station } from "../types/station";

export const filterStationsByCity = (stations: Station[], city: string) => {
  if (!city) return stations;
  return stations.filter((s) =>
    s.city.toLowerCase().includes(city.toLowerCase())
  );
};
