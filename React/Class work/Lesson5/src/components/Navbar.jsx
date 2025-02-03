import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
        to='/users'
      >
        Users
      </NavLink>
    </nav>
  )
}
