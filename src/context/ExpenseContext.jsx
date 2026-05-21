import { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const ExpenseContext = createContext()

export const ExpenseProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem(
      'transactions',
      JSON.stringify(transactions)
    )
  }, [transactions])

  const addTransaction = (data) => {
    const newTransaction = {
      id: uuidv4(),
      ...data,
    }

    setTransactions((prev) => [newTransaction, ...prev])
  }
  const deleteTransaction = (id) => {
    setTransactions((prev) =>
      prev.filter((item) => item.id !== id)
    )
  }

  const income = transactions
    .filter((item) => item.type === 'income')
    .reduce((acc, item) => acc + Number(item.amount), 0)

  const expense = transactions
    .filter((item) => item.type === 'expense')
    .reduce((acc, item) => acc + Number(item.amount), 0)

  const balance = income - expense

  return (
    <ExpenseContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
        income,
        expense,
        balance,
      }}
          >
      {children}
    </ExpenseContext.Provider>
  )
}