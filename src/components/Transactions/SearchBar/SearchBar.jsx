import SearchIcon from "../../../assets/icons/search.png";

import "./SearchBar.css";

function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="search-bar">
      <img
        src={SearchIcon}
        alt="search icon"
        className="search-icon"
      />

      <input
        type="text"
        placeholder="Search transactions"
        className="search-input"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
    </div>
  );
}

export default SearchBar;