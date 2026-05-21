import './BottomNav.css'
import {
  FaHome,
  FaList,
  FaPlus,
  FaChartBar,
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const BottomNav = () => {
  return (
    <div className='bottom-nav'>
      <NavLink to='/'>
        <FaHome />
      </NavLink>

      <NavLink to='/transactions'>
        <FaList />
      </NavLink>

      <NavLink to='/add' className='plus-btn'>
        <FaPlus />
      </NavLink>


      <NavLink to='/analytics'>
        <FaChartBar />
      </NavLink>
    </div>
  )
}

export default BottomNav
