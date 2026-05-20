import "./TransactionItem.css";

function TransactionItem({
  icon,
  title,
  category,
  amount,
  date,
  type,
}) {
  return (
    <div className="transaction-item">

      {/* LEFT SIDE */}
      <div className="transaction-left">

        <div className="transaction-icon">
          <img
            src={icon}
            alt={`${title} icon`}
          />
        </div>

        <div className="transaction-info">

          <h4 className="transaction-title">
            {title}
          </h4>

          <p className="transaction-category">
            {category}
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="transaction-right">

        <h4 className={`transaction-amount ${type}`}>
          {amount}
        </h4>

        <p className="transaction-date">
          {date}
        </p>

      </div>

    </div>
  );
}

export default TransactionItem;