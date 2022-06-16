import { FaSearch, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getEmployees, reset } from "../features/employees/employeeSlice";
import Spinner from "./Spinner";

function SearchBar({ placeholder, data }) {
  const dispatch = useDispatch();

  const [filteredData, setFilteredData] = useState([]);

  const { employees, isLoading, isError, message } = useSelector(
    (state) => state.employees
  );

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = employees.filter((value) => {
      return value.firstName.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getEmployees());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input text="text" placeholder={placeholder} onChange={handleFilter} />
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <a className="dataItem">
                <p>
                  {value.firstName} {value.lastName}
                </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
