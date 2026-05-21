import './Dashboard.css'
import BottomNav from '../../components/BottomNav/BottomNav'
import TransactionCard from '../../components/TransactionCard/TransactionCard'
import { useContext } from 'react'
import { ExpenseContext } from '../../context/ExpenseContext'

const Dashboard = () => {
  const {
    balance,
    income,
    expense,
    transactions,
    deleteTransaction,
  } = useContext(ExpenseContext)

  return (
    <div className='page'>
      <h1 className='logo'>Financial Serenity</h1>

      <div className='balance-box'>
        <p>TOTAL BALANCE</p>
        <h2>${balance.toFixed(2)}</h2>
      </div>
       <div className='summary-grid'>
        <div className='summary-card'>
          <span>INCOME</span>
          <h3>${income.toFixed(2)}</h3>
        </div>

        <div className='summary-card'>
          <span>EXPENSES</span>
          <h3>${expense.toFixed(2)}</h3>
        </div>
      </div>

      <div className='analytics-banner'>
        <h3>Spend Analytics</h3>
        <p>You spent less this week.</p>
      </div>

      <div className='recent-header'>
        <h3>Recent Activity</h3>
      </div>

      <div className='recent-list'>
        {transactions.length === 0 ? (
          <div className='empty-box'>
            No Transactions Yet
          </div>
        ) : (
          transactions
            .slice(0, 5)
            .map((item) => (
              <TransactionCard
                key={item.id}
                item={item}
                onDelete={deleteTransaction}
              />
            ))
        )}
      </div>

      <BottomNav />
    </div>
  )
}

export default Dashboard



