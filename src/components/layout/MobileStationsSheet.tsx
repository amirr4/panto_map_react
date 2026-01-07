import { StationList } from "../stations/StationList";
import { CityFilter } from "../filters/CityFilter";
import type { Station } from "../../types/station";

interface Props {
  open: boolean;
  city: string;
  onCityChange: (v: string) => void;
  stations: Station[];
  selectedId?: number;
  onSelect: (id: number) => void;
  onClose: () => void;
}

export function MobileStationsSheet({
  open,
  city,
  onCityChange,
  stations,
  selectedId,
  onSelect,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[2000] bg-black/40 md:hidden">
      <div className="absolute bottom-0 left-0 right-0 h-[75%] rounded-t-2xl bg-white px-4 py-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-semibold">Stations</h3>
          <button onClick={onClose} className="text-sm text-slate-500">
            Close
          </button>
        </div>

        <CityFilter value={city} onChange={onCityChange} />

        <div className="mt-3 h-full overflow-y-auto pb-10">
          <StationList
            stations={stations}
            selectedId={selectedId}
            onSelect={(id) => {
              onSelect(id);
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
}
