import TransactionItem from "../TransactionItem/TransactionItem";

import ShoppingIcon from "../../../assets/icons/shopping.png";
import SalaryIcon from "../../../assets/icons/salary.png";
import FoodIcon from "../../../assets/icons/food.png";
import TravelIcon from "../../../assets/icons/travel.png";

import "./RecentActivity.css";

function RecentActivity() {
  return (
    <section className="recent-activity">

      {/* Section header */}
      <div className="activity-header">

        <h2 className="activity-title">
          Recent Activity
        </h2>

        <button className="view-all-btn">
          VIEW ALL
        </button>

      </div>

      {/* Transaction list */}
      <div className="activity-list">

        <TransactionItem
          icon={ShoppingIcon}
          title="Apple Store"
          category="Technology"
          amount="-$1,299.00"
          date="24 OCT"
          type="expense"
        />

        <TransactionItem
          icon={SalaryIcon}
          title="Monthly Salary"
          category="Income"
          amount="+$6,500.00"
          date="23 OCT"
          type="income"
        />

        <TransactionItem
          icon={FoodIcon}
          title="The Monocle Café"
          category="Dining"
          amount="-$42.50"
          date="22 OCT"
          type="expense"
        />

        <TransactionItem
          icon={TravelIcon}
          title="Lufthansa Airlines"
          category="Travel"
          amount="-$840.00"
          date="21 OCT"
          type="expense"
        />

      </div>

    </section>
  );
}

export default RecentActivity;