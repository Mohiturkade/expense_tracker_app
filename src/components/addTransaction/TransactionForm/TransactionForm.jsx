import './TransactionForm.css'

import { useState } from 'react'
import { categories } from '../../../data/categories'

const TransactionForm = ({
  onSubmit,
  initialData = {},
  submitText = 'Save Transaction',
}) => {
  const [type, setType] = useState(
    initialData.type || 'expense'
  )

  const [title, setTitle] = useState(
    initialData.title || ''
  )

  const [amount, setAmount] = useState(
    initialData.amount || ''
  )

  const [category, setCategory] = useState(
    initialData.category || 'Food'
  )

  const [date, setDate] = useState(
    initialData.date || ''
  )

  const [note, setNote] = useState(
    initialData.note || ''
  )

  const [errors, setErrors] = useState({})

  // ==========================
  // Validation
  // ==========================

  const validateForm = () => {
    let newErrors = {}

    if (!title.trim()) {
      newErrors.title =
        'Transaction title is required'
    }

    if (!amount || Number(amount) <= 0) {
      newErrors.amount =
        'Enter valid amount'
    }

    if (!date) {
      newErrors.date = 'Select a date'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  // ==========================
  // Handle Submit
  // ==========================

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    const transactionData = {
      title,
      amount,
      category,
      date,
      note,
      type,
    }

    onSubmit(transactionData)

    // Reset form
    setTitle('')
    setAmount('')
    setCategory('Food')
    setDate('')
    setNote('')
    setType('expense')
  }

  return (
    <form
      className='transaction-form'
      onSubmit={handleSubmit}
    >
      {/* Toggle */}
      <div className='toggle-box'>
        <button
          type='button'
          className={
            type === 'expense'
              ? 'active-toggle'
              : ''
          }
          onClick={() => setType('expense')}
        >
          Expense
        </button>

        <button
          type='button'
          className={
            type === 'income'
              ? 'active-toggle'
              : ''
          }
          onClick={() => setType('income')}
        >
          Income
        </button>
      </div>

      {/* Title */}
      <div className='form-group'>
        <input
          type='text'
          placeholder='Transaction Title'
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        {errors.title && (
          <p className='error-text'>
            {errors.title}
          </p>
        )}
      </div>

      {/* Amount */}
      <div className='form-group'>
        <input
          type='number'
          placeholder='Amount'
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        {errors.amount && (
          <p className='error-text'>
            {errors.amount}
          </p>
        )}
      </div>

      {/* Categories */}
      <div className='category-grid'>
        {categories.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.id}
              className={`category-box ${
                category === item.name
                  ? 'selected-category'
                  : ''
              }`}
              onClick={() =>
                setCategory(item.name)
              }
            >
              <Icon />

              <span>{item.name}</span>
            </div>
          )
        })}
      </div>

      {/* Date */}
      <div className='form-group'>
        <input
          type='date'
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
        />

        {errors.date && (
          <p className='error-text'>
            {errors.date}
          </p>
        )}
      </div>

      {/* Note */}
      <textarea
        placeholder='Add note'
        value={note}
        onChange={(e) =>
          setNote(e.target.value)
        }
      />

      {/* Button */}
      <button
        type='submit'
        className='save-btn'
      >
        {submitText}
      </button>
    </form>
  )
}

export default TransactionForm