import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Transactions from '../pages/Transactions/Transactions'
import AddTransaction from '../pages/AddTransaction/AddTransaction'
import Analytics from '../pages/Analytics/Analytics'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/transactions' element={<Transactions />} />
      <Route path='/add' element={<AddTransaction />} />
      <Route path='/analytics' element={<Analytics />} />
    </Routes>
  )
}

export default AppRoutes