import "./Transactions.css";

import BottomNav from "../../components/BottomNav/BottomNav";

import SearchBar from "../../components/transactions/SearchBar/SearchBar";
import CategoryFilter from "../../components/transactions/CategoryFilter/CategoryFilter";
import DateGroup from "../../components/transactions/DateGroup/DateGroup";

import {
  useContext,
  useMemo,
  useState,
} from "react";

import { ExpenseContext } from "../../context/ExpenseContext";

function Transactions() {
  const { transactions } =
    useContext(ExpenseContext);

  const [search, setSearch] =
    useState("");

  const [activeCategory, setActiveCategory] =
    useState("All");

  // =========================
  // FILTER TRANSACTIONS
  // =========================

  const filteredTransactions = useMemo(() => {
    return transactions.filter((item) => {
      const matchSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        activeCategory === "All"
          ? true
          : item.category ===
            activeCategory;

      return (
        matchSearch && matchCategory
      );
    });
  }, [
    transactions,
    search,
    activeCategory,
  ]);

  // =========================
  // GROUP BY DATE
  // =========================

  const groupedTransactions = {};

  filteredTransactions.forEach((item) => {
    const date = new Date(item.date);

    const formattedDate =
      date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      });

    if (
      !groupedTransactions[formattedDate]
    ) {
      groupedTransactions[
        formattedDate
      ] = [];
    }

    groupedTransactions[
      formattedDate
    ].push(item);
  });

  return (
    <div className="screen">
      {/* Header */}
      <div className="transactions-header">
        <h1 className="transactions-title">
          Transactions
        </h1>
      </div>

      {/* Search */}
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* Category Filter */}
      <CategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={
          setActiveCategory
        }
      />

      {/* Empty State */}
      {filteredTransactions.length ===
      0 ? (
        <div className="empty-state">
          <div className="empty-title">
            No Transactions Found
          </div>

          <div className="empty-text">
            Try another category or search
          </div>
        </div>
      ) : (
        Object.keys(groupedTransactions).map(
          (date) => (
            <DateGroup
              key={date}
              title={date}
              transactions={
                groupedTransactions[date]
              }
            />
          )
        )
      )}

      <BottomNav />
    </div>
  );
}

export default Transactions;