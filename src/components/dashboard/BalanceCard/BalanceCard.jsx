import SummaryCard from "../SummaryCard/SummaryCard";

import ArrowDown from "../../../assets/icons/arrow-down.png";
import ChartDown from "../../../assets/icons/chart-down.png";

import "./BalanceCard.css";

function BalanceCard() {
  return (
    <section className="balance-card">

      {/* Total Balance */}
      <div className="total-balance">

        <p className="balance-label">
          TOTAL BALANCE
        </p>

        <h1 className="balance-amount">
          ₹42,950.00
        </h1>

        <div className="balance-details">
          <img
            src={ChartDown}
            alt="trend icon"
          />

          <p>+2.4% this month</p>
        </div>

      </div>
{/* Summary Cards */}
      <div className="summary-cards">

        <SummaryCard
          arrowIcon={ArrowDown}
          title="Income"
          amount="$8,400"
          type="income"
        />

        <SummaryCard
          arrowIcon={ArrowDown}
          title="Expenses"
          amount="$3,250"
          type="expense"
        />

      </div>
{/* Spend Analytics */}
      <div className="spend-analytics">

        <h3>Spend Analytics</h3>

        <p>
          You spent 12% less on dining this week.
        </p>

      </div>

    </section>
  );
}

export default BalanceCard;
