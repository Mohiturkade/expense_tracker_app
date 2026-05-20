import "./Sidebar.css";

function Sidebar({ isOpen, toggleMenu }) {

  return (
    <>
      {/* OVERLAY */}
      {
        isOpen && (
          <div
            className="sidebar-overlay"
            onClick={toggleMenu}
          />
        )
      }

      {/* SIDEBAR */}
      <aside
        className={
          isOpen
            ? "sidebar open"
            : "sidebar"
        }
      >

        <div className="sidebar-header">

          <h2>Menu</h2>

          <button
            className="close-btn"
            onClick={toggleMenu}
          >
            ✕
          </button>

        </div>

        <ul className="sidebar-menu">

          <li>Dashboard</li>

          <li>Transactions</li>

          <li>Analytics</li>

          <li>Settings</li>

        </ul>

      </aside>
    </>
  );
}

export default Sidebar;