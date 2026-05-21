import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, toggleMenu }) {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Transactions", path: "/transactions" },
  ];

  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay" onClick={toggleMenu} />
      )}

      <aside className={isOpen ? "sidebar open" : "sidebar"}>
        <div className="sidebar-header">
          <h2>Menu</h2>

          <button className="close-btn" onClick={toggleMenu}>
            ✕
          </button>
        </div>

        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.path} onClick={toggleMenu}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;