import { FaSearch, FaTimes } from "react-icons/fa";

function SearchBar({ placeholder, data }) {
    const dispatch = useDispatch();
    
  return (
    <div className="search">
      <div className="searchInputs">
        <input text="text" placeholder={placeholder} />
        <div className="searchIcon">
          <FaSearch />
        </div>
      </div>
      <div className="dataResult">
          {}
      </div>
    </div>
  );
}

export default SearchBar;
