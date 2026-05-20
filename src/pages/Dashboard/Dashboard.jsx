import { useState } from "react";
import Header from "../../components/common/Header/Header";
import BalanceCard from "../../components/dashboard/BalanceCard/BalanceCard";
import RecentActivity from "../../components/dashboard/RecentActivity/RecentActivity";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Dashboard.css";

function Dashboard() {
   const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <main className="dashboard">
        <Header toggleMenu={toggleMenu} />

      <Sidebar
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <BalanceCard />
      <RecentActivity/>
    </main>
  );
}

export default Dashboard;
