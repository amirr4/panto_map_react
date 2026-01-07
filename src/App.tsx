import { useState } from "react";
import { useStations } from "./hooks/useStations";
import { Loader } from "./components/common/Loader";
import { ErrorState } from "./components/common/ErrorState";
import { filterStationsByCity } from "./utils/filterStations";

import { DesktopSidebar } from "./components/layout/DesktopSidebar";
import { MobileStationsSheet } from "./components/layout/MobileStationsSheet";
import { MapContainerView } from "./components/layout/MapContainerView";

function App() {
  const { stations, loading, error } = useStations();

  const [city, setCity] = useState("");
  const [selectedId, setSelectedId] = useState<number | undefined>();
  const [mobileListOpen, setMobileListOpen] = useState(false);

  const filteredStations = filterStationsByCity(stations, city);

  if (loading) return <Loader />;
  if (error)
    return (
      <ErrorState message={error} onRetry={() => window.location.reload()} />
    );

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <DesktopSidebar
        city={city}
        onCityChange={setCity}
        stations={filteredStations}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />

      <MapContainerView
        stations={filteredStations}
        selectedId={selectedId}
        onSelect={setSelectedId}
        onOpenList={() => setMobileListOpen(true)}
      />

      <MobileStationsSheet
        open={mobileListOpen}
        city={city}
        onCityChange={setCity}
        stations={filteredStations}
        selectedId={selectedId}
        onSelect={setSelectedId}
        onClose={() => setMobileListOpen(false)}
      />
    </div>
  );
}

export default App;
