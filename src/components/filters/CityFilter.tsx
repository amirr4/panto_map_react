interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const CityFilter = ({ value, onChange }: Props) => {
  return (
    <input
      type="text"
      placeholder="Filter by city"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mb-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
    />
  );
};
