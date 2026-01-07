import type { Station } from "../../types/station";
import { MapView } from "../map/MapView";

interface Props {
  stations: Station[];
  selectedId?: number;
  onSelect: (id: number) => void;
  onOpenList: () => void;
}

export function MapContainerView({
  stations,
  selectedId,
  onSelect,
  onOpenList,
}: Props) {
  return (
    <div className="relative h-full flex-1">
      <button
        onClick={onOpenList}
        className="absolute left-14 top-4 z-[1000] rounded-lg bg-white px-3 py-2 text-sm font-medium shadow md:hidden"
      >
        ☰ Stations
      </button>

      <MapView
        stations={stations}
        selectedId={selectedId}
        onSelect={onSelect}
      />
    </div>
  );
}
