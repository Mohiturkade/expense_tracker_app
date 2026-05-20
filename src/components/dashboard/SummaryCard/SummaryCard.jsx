import "./SummaryCard.css";

function SummaryCard({ arrowIcon, title, amount, type }) {
  return (
    <div className={`summary-card ${type}`}>
      <div className="summary-top">
        <img src={arrowIcon} alt={title} />

        <p>{title}</p>
      </div>

      <h2 className="summary-amount">
        ₹ {amount}
      </h2>
    </div>
  );
}

export default SummaryCard;
