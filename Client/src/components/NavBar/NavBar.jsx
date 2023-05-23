import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import { ButtonA, ButtonB, ButtonC } from "../../button";
import styles from "./NavBar.module.css";

const NavBar = ({ onSearch, setAccess }) => {
  const handleLogOut = () => {
    setAccess(false);
  };
  return (
    <div className={styles.NavBar}>
      <div className={styles.SearchBar}>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="LogOutHome">
        <ButtonB>
          <NavLink to="/home" activeClassName={styles.active}>
            Home
          </NavLink>
        </ButtonB>
      </div>
      <div className="AboutMe">
        <ButtonB>
          <NavLink to="/about" activeClassName={styles.active}>
            About Me
          </NavLink>
        </ButtonB>
        <ButtonB>
          <NavLink to="/favorites" activeClassName={styles.active}>
            Favorites
          </NavLink>
        </ButtonB>
        <ButtonC onClick={handleLogOut} activeClassName={styles.active}>
          Log out
        </ButtonC>
      </div>
    </div>
  );
};

export default NavBar;
