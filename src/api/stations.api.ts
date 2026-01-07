import type { Station } from "../types/station";

const API_URL =
  "https://gist.githubusercontent.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c/raw/train-stations.json";

export const fetchStations = async (): Promise<Station[]> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch stations: ${response.status} ${response.statusText}`
      );
    }

    const data: Station[] = await response.json();
    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? `Error fetching stations: ${error.message}`
        : "Unknown error occurred while fetching stations"
    );
  }
};
