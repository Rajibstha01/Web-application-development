// src/components/NavBar/NavBar.jsx
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Course Management System</div>
      <div className="navbar-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Students
        </NavLink>
        <NavLink
          to="/add"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Add Student
        </NavLink>
      </div>
    </nav>
  );
}
export default NavBar;
