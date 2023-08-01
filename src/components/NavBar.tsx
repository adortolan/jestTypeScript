import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Pagina 1 </Link>
        <Link to="/Pagina2">Pagina 2 </Link>
        <Link to="/Pagina3">Pagina 3 </Link>
      </div>
    </nav>
  )
}
export default NavBar
