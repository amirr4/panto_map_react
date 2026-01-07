import { useEffect, useState } from "react";
import { fetchStations } from "../api/stations.api";
import type { Station } from "../types/station";

export const useStations = () => {
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStations()
      .then(setStations)
      .catch(() => setError("Error loading stations"))
      .finally(() => setLoading(false));
  }, []);

  return { stations, loading, error };
};
