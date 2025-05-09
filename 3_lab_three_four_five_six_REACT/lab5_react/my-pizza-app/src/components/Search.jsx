/**
 * Поле поиска по названию пиццы.
 *
 * @component
 * @param {Object} props
 * @param {Function} props.onSearch
 * @returns {JSX.Element}
 */
function Search({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Поиск по названию..."
      onChange={handleChange}
    />
  );
}

export default Search;
