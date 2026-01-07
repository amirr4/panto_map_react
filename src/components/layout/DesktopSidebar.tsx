import { StationList } from "../stations/StationList";
import { CityFilter } from "../filters/CityFilter";
import type { Station } from "../../types/station";

interface Props {
  city: string;
  onCityChange: (v: string) => void;
  stations: Station[];
  selectedId?: number;
  onSelect: (id: number) => void;
}

export function DesktopSidebar({
  city,
  onCityChange,
  stations,
  selectedId,
  onSelect,
}: Props) {
  return (
    <aside className="hidden md:flex w-80 flex-shrink-0 flex-col border-r border-slate-200 bg-slate-50 px-4 py-4">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">
        Train Stations
      </h2>

      <CityFilter value={city} onChange={onCityChange} />

      <div className="mt-3 flex-1 overflow-y-auto">
        <StationList
          stations={stations}
          selectedId={selectedId}
          onSelect={onSelect}
        />
      </div>
    </aside>
  );
}
