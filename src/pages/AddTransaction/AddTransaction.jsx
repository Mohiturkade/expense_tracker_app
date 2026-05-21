import './AddTransaction.css'

import BottomNav from '../../components/BottomNav/BottomNav'
import TransactionForm from '../../components/addTransaction/TransactionForm/TransactionForm'

import { useContext } from 'react'
import { ExpenseContext } from '../../context/ExpenseContext'

import { useNavigate } from 'react-router-dom'

const AddTransaction = () => {
  const { addTransaction } =
    useContext(ExpenseContext)

  const navigate = useNavigate()

  // Handle Form Submit
  const handleAddTransaction = (
    transactionData
  ) => {
    addTransaction(transactionData)

    navigate('/')
  }

  return (
    <div className='page'>
      <h1 className='logo'>
        Add Transaction
      </h1>

      <TransactionForm
        onSubmit={handleAddTransaction}
      />

      <BottomNav />
    </div>
  )
}

export default AddTransaction