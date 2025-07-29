import '../Styes/SearchBar.css';

function SearchBar({ onSearch }) {
  const handleSearch = (e) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };
  
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search cars..." 
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;