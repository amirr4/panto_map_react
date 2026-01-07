import { useState } from "react";
import { useStations } from "./hooks/useStations";
import { StationList } from "./components/stations/StationList";
import { CityFilter } from "./components/filters/CityFilter";
import { MapView } from "./components/map/MapView";
import { Loader } from "./components/common/Loader";
import { ErrorState } from "./components/common/ErrorState";
import { filterStationsByCity } from "./utils/filterStations";

function App() {
  const { stations, loading, error } = useStations();
  const [city, setCity] = useState("");
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  const filteredStations = filterStationsByCity(stations, city);

  if (loading) return <Loader />;
  if (error) {
    return (
      <ErrorState message={error} onRetry={() => window.location.reload()} />
    );
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <aside className="flex w-80 flex-shrink-0 flex-col border-r border-slate-200 bg-slate-50 px-4 py-4">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">
          Train Stations
        </h2>
        <CityFilter value={city} onChange={setCity} />
        <div className="mt-3 flex-1 overflow-y-auto">
          <StationList
            stations={filteredStations}
            onSelect={setSelectedId}
            selectedId={selectedId}
          />
        </div>
      </aside>

      <div className="relative h-full flex-1">
        <MapView
          stations={filteredStations}
          onSelect={setSelectedId}
          selectedId={selectedId}
        />
      </div>
    </div>
  );
}

export default App;
