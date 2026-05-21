import './Analytics.css'
import BottomNav from '../../components/BottomNav/BottomNav'
import { useContext } from 'react'
import { ExpenseContext } from '../../context/ExpenseContext'

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from 'recharts'

const COLORS = [
  '#111111',
  '#4a4a4a',
  '#7a7a7a',
  '#bdbdbd',
  '#d9d9d9',
]

const Analytics = () => {
  const { transactions, expense } =
    useContext(ExpenseContext)

  // Only expense transactions
  const expenseTransactions = transactions.filter(
    (item) => item.type === 'expense'
  )

  // Group category totals
  const groupedData = {}

  expenseTransactions.forEach((item) => {
    if (groupedData[item.category]) {
      groupedData[item.category] += Number(
        item.amount
      )
    } else {
      groupedData[item.category] = Number(
        item.amount
      )
    }
  })

  // Convert to chart array
  const chartData = Object.keys(groupedData).map(
    (key) => ({
      name: key,
      value: groupedData[key],
    })
  )

  // Monthly bar data
  const monthlyData = [
    { month: 'May', value: 1200 },
    { month: 'Jun', value: 1900 },
    { month: 'Jul', value: 1400 },
    { month: 'Aug', value: 2500 },
    { month: 'Sep', value: 2100 },
    { month: 'Oct', value: expense },
  ]

  return (
    <div className='page'>
      <h1 className='logo'>Analytics</h1>

      {/* Top Summary Card */}
      <div className='top-card'>
        <p>TOTAL EXPENDITURE</p>
        <h2>${expense.toFixed(2)}</h2>

        <span>12% less than last month</span>
      </div>

      {/* Donut Chart */}
      <div className='chart-card'>
        <h3>Spending Breakdown</h3>

        {chartData.length === 0 ? (
          <div className='empty-chart'>
            No Expense Data
          </div>
        ) : (
          <ResponsiveContainer
            width='100%'
            height={280}
          >
            <PieChart>
              <Pie
                data={chartData}
                dataKey='value'
                cx='50%'
                cy='50%'
                innerRadius={70}
                outerRadius={100}
                paddingAngle={3}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[index % COLORS.length]
                    }
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Category Breakdown */}
      <div className='breakdown-card'>
        {chartData.map((item) => {
          const percentage = (
            (item.value / expense) *
            100
          ).toFixed(0)

          return (
            <div
              className='breakdown-row'
              key={item.name}
            >
              <div>
                <h4>{item.name}</h4>
                <p>{percentage}%</p>
              </div>

              <h4>${item.value}</h4>
            </div>
          )
        })}
      </div>

      {/* Bar Chart */}
      <div className='bar-chart-card'>
        <h3>6-Month Trend</h3>

        <ResponsiveContainer
          width='100%'
          height={220}
        >
          <BarChart data={monthlyData}>
            <XAxis dataKey='month' />

            <Tooltip />

            <Bar
              dataKey='value'
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <BottomNav />
    </div>
  )
}

export default Analytics