import SearchIcon from "../../../assets/icons/search.png";

import "./SearchBar.css";

function SearchBar() {
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
      />

    </div>
  );
}

export default SearchBar;