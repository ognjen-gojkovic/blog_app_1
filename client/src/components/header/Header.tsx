import { HeaderStyled } from "./Header.styled";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="header">
        <div className="headerLeft">
          <Link to="/">Ognjen's Blogs</Link>
        </div>
        <div className="headerMiddle">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
          </ul>
        </div>
        <div className="headerRight">
          <ul>
            <li>
              <NavLink to="/account">Account</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
