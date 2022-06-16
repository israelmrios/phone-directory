import { FaSignInAlt, FaSignOutAlt, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import SearchBar from "./SearchBar";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  const add = () => {
    navigate('/admin-page')
  }
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Dunder Mifflin Phone Directory</Link>
      </div>
      <div>
        <SearchBar placeholder="Search..." />
      </div>
      <ul>
        {user ? (
          <>
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
          <li>
            <button className="btn" onClick={add}>
              <FaPlus />
            </button>
          </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/admin-login">
                <FaSignInAlt /> Admin
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
