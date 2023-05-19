import './NavBar.css';

import CartWidget from "../CartWidget/CartWidget"



const Navbar = () => {
  return (
    <div className="nav-container">
    <nav className="navbar">
        <h3 className="navbar-logo"> PINA</h3>
        <div>
            <button className="Buttons">Mujer</button>
            <button className="Buttons">Hombre</button>
            <button className="Buttons">Niños</button>

        </div>
        <CartWidget/>
    </nav>
    </div>
  )
}

export default Navbar