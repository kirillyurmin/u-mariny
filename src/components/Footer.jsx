import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h4>У Марины</h4>
          <p>Как дома, только вкуснее.</p>
          <p>г. Москва, ул. Тёплая, 12</p>
        </div>
        <div>
          <h4>Навигация</h4>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/menu">Меню</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/booking">Бронирование</Link></li>
          </ul>
        </div>
        <div>
          <h4>Контакты</h4>
          <ul>
            <li><a href="tel:+74951234567">+7 (495) 123-45-67</a></li>
            <li><a href="mailto:hello@umariny.ru">hello@umariny.ru</a></li>
            <li>Ежедневно 9:00 – 23:00</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Кафе «У Марины». Все права защищены.
      </div>
    </footer>
  );
}