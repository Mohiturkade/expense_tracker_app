import Header from "../../components/common/Header/Header";
import SearchBar from "../../components/transactions/SearchBar/SearchBar";
import CategoryFilter from "../../components/transactions/CategoryFilter/CategoryFilter";
import DateGroup from "../../components/transactions/DateGroup/DateGroup";
import BottomNav from "../../components/common/BottomNav/BottomNav";

import "./Transactions.css";

function Transactions() {
  return (
    <main className="transactions">

      <Header />

      <SearchBar />

      <CategoryFilter />

      <div className="transaction-groups">

        <DateGroup title="Today" />

        <DateGroup title="Yesterday" />

        <DateGroup title="October 24" />

      </div>

      <BottomNav />

    </main>
  );
}

export default Transactions;