import type { Station } from "../../types/station";

interface Props {
  stations: Station[];
  selectedId?: number;
  onSelect: (id: number) => void;
}

export const StationList = ({ stations, selectedId, onSelect }: Props) => {
  if (stations.length === 0) {
    return (
      <p className="mt-3 text-sm italic text-slate-500">No stations found</p>
    );
  }

  return (
    <ul className="mt-3 space-y-1 text-sm">
      {stations.map((s) => (
        <li
          key={s.id}
          className={`cursor-pointer rounded-md px-2 py-1 transition-colors ${
            s.id === selectedId
              ? "bg-sky-50 font-semibold"
              : "hover:bg-slate-100"
          }`}
          onClick={() => onSelect(s.id)}
        >
          <span className="block text-sm">{s.name}</span>
          <span className="text-xs text-slate-600">{s.city}</span>
        </li>
      ))}
    </ul>
  );
};
