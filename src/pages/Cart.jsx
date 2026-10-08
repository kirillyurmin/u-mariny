import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Cart() {
  usePageTitle('Корзина');
  const { items, remove, changeQty, clear, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="page-enter">
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Корзина пуста</h2>
            <p className="section-sub">Загляните в меню — там много вкусного</p>
            <Link to="/menu" className="btn">Перейти в меню</Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-enter">
      <section className="section">
        <div className="container">
          <h2 className="section-title">Корзина</h2>
          <p className="section-sub">Проверьте заказ перед оформлением</p>

          <div className="cart-list">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.price} ₽ за порцию</p>
                </div>
                <div className="cart-qty">
                  <button onClick={() => changeQty(item.id, -1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => changeQty(item.id, +1)}>+</button>
                </div>
                <div className="cart-item-total">
                  {item.price * item.qty} ₽
                </div>
                <button
                  className="cart-remove"
                  onClick={() => remove(item.id)}
                  aria-label="Удалить"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-total">
              Итого: <strong>{totalPrice} ₽</strong>
            </div>
            <div className="cart-actions">
              <button className="btn btn-ghost" onClick={clear}>
                Очистить
              </button>
              <Link to="/checkout" className="btn">
                Оформить
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}