import './TransactionCard.css'

const TransactionCard = ({ item, onDelete }) => {
  return (
    <div className='transaction-card'>
      <div>
        <h3>{item.title}</h3>
        <p>{item.category}</p>
      </div>

      <div>
        <h4
          className={
            item.type === 'income'
              ? 'income'
              : 'expense'
          }
        >
          {item.type === 'income' ? '+' : '-'}$
          {item.amount}
        </h4>
        <button
          className='delete-btn'
          onClick={() => onDelete(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TransactionCard