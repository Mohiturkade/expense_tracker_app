import TransactionItem from "../../dashboard/TransactionItem/TransactionItem"

import ShoppingIcon from "../../../assets/icons/shopping.png";
import SalaryIcon from "../../../assets/icons/salary.png";
import "./DateGroup.css";

function DateGroup({ title }) {
  return (
    <section className="date-group">

      <h3 className="group-title">
        {title}
      </h3>

      <div className="group-list">

        <TransactionItem
          icon={ShoppingIcon}
          title="Whole Foods Market"
          category="Groceries"
          amount="-$84.20"
          type="expense"
        />

        <TransactionItem
          icon={SalaryIcon}
          title="Monthly Salary"
          category="Income"
          amount="+$4,250.00"
          type="income"
        />

      </div>

    </section>
  );
}

export default DateGroup;