import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalCount } = useCart();

  const links = [
    { to: '/', label: 'Главная' },
    { to: '/menu', label: 'Меню' },
    { to: '/about', label: 'О нас' },
    { to: '/contacts', label: 'Контакты' },
    { to: '/booking', label: 'Бронирование' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          У Марины <span>·</span>
        </NavLink>

        <nav>
          <ul className={`nav-links ${open ? 'open' : ''}`}>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setOpen(false)}
                  end={l.to === '/'}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <NavLink to="/cart" className="cart-icon" aria-label="Корзина">
            🛒
            {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
          </NavLink>

          <button
            className="burger"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}