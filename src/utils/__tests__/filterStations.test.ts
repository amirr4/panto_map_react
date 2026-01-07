import { describe, it, expect } from "vitest";
import { filterStationsByCity } from "../filterStations";
import type { Station } from "../../types/station";

describe("filterStationsByCity", () => {
  const mockStations: Station[] = [
    { id: 1, name: "Berlin Hbf", city: "Berlin", lat: 52.5251, lng: 13.3694 },
    { id: 2, name: "Hamburg Hbf", city: "Hamburg", lat: 53.553, lng: 10.0067 },
    { id: 3, name: "Munich Hbf", city: "Munich", lat: 48.1402, lng: 11.5586 },
    {
      id: 4,
      name: "Berlin Ostbahnhof",
      city: "Berlin",
      lat: 52.5108,
      lng: 13.4348,
    },
  ];

  it("should return all stations when city filter is empty", () => {
    const result = filterStationsByCity(mockStations, "");
    expect(result).toEqual(mockStations);
    expect(result).toHaveLength(4);
  });

  it("should filter stations by exact city name (case-insensitive)", () => {
    const result = filterStationsByCity(mockStations, "Berlin");
    expect(result).toHaveLength(2);
    expect(result[0].city).toBe("Berlin");
    expect(result[1].city).toBe("Berlin");
  });

  it("should filter stations by partial city name (case-insensitive)", () => {
    const result = filterStationsByCity(mockStations, "ber");
    expect(result).toHaveLength(2);
    expect(result.every((s) => s.city.toLowerCase().includes("ber"))).toBe(
      true
    );
  });

  it("should return empty array when no stations match", () => {
    const result = filterStationsByCity(mockStations, "Cologne");
    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });

  it("should handle case-insensitive filtering", () => {
    const result1 = filterStationsByCity(mockStations, "BERLIN");
    const result2 = filterStationsByCity(mockStations, "berlin");
    const result3 = filterStationsByCity(mockStations, "Berlin");

    expect(result1).toEqual(result2);
    expect(result2).toEqual(result3);
    expect(result1).toHaveLength(2);
  });
});
