export default function CategoryFilter({ value, onChange }) {
  return (
    <select
      data-testid="category-filter"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Technology">Technology</option>
      <option value="Music">Music</option>
    </select>
  );
}
