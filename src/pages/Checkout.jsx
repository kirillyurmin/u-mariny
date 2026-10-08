import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useReveal } from '../hooks/useReveal';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Checkout() {
  usePageTitle('Оформление заказа');
  const { items, totalPrice, clear } = useCart();
  const navigate = useNavigate();
  const revealGrid = useReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    time: '',
    comment: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      clear();
      navigate('/');
    }, 3500);
  };

  // Если корзина пуста — показываем заглушку
  if (items.length === 0 && !sent) {
    return (
      <div className="page-enter">
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Заказ пуст</h2>
            <p className="section-sub">Добавьте блюда из меню</p>
            <Link to="/menu" className="btn">Перейти в меню</Link>
          </div>
        </section>
      </div>
    );
  }

  // Экран успеха
  if (sent) {
    return (
      <div className="page-enter">
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>✅</div>
            <h2 className="section-title">Заказ принят!</h2>
            <p className="section-sub">
              Мы позвоним вам для подтверждения. Заберите заказ через 30–40 минут.
            </p>
            <Link to="/" className="btn">На главную</Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-enter">
      <section className="section">
        <div className="container">
          <h2 className="section-title">Оформление заказа</h2>
          <p className="section-sub">Самовывоз · Оплата при получении</p>

          <div className="checkout-grid reveal" ref={revealGrid}>
            {/* Форма */}
            <form className="form-card" onSubmit={handleSubmit}>
              <h3 className="checkout-subtitle">Ваши данные</h3>

              <div className="form-group">
                <label htmlFor="name">Имя *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Как к вам обращаться"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Телефон *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">Удобное время получения</label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  value={form.time}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="comment">Комментарий</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  placeholder="Пожелания к заказу"
                />
              </div>

              <div className="pickup-note">
                <span>📍</span>
                <div>
                  <strong>Самовывоз</strong>
                  <p>г. Москва, ул. Тёплая, 12 · с 9:00 до 23:00</p>
                </div>
              </div>

              <button type="submit" className="btn" style={{ width: '100%', marginTop: 16 }}>
                Подтвердить заказ · {totalPrice} ₽
              </button>
            </form>

            {/* Сводка заказа */}
            <aside className="checkout-summary">
              <h3 className="checkout-subtitle">Ваш заказ</h3>
              <div className="checkout-items">
                {items.map((i) => (
                  <div key={i.id} className="checkout-item">
                    <img src={i.img} alt={i.name} />
                    <div className="checkout-item-info">
                      <span>{i.name}</span>
                      <small>{i.qty} × {i.price} ₽</small>
                    </div>
                    <strong>{i.qty * i.price} ₽</strong>
                  </div>
                ))}
              </div>
              <div className="checkout-total">
                <span>Итого</span>
                <strong>{totalPrice} ₽</strong>
              </div>
              <Link to="/cart" className="checkout-edit">← Изменить заказ</Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}