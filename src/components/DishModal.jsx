import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

export default function DishModal({ dish, onClose }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleAdd = () => {
    add(dish);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">✕</button>
        <img src={dish.img} alt={dish.name} />
        <div className="modal-body">
          <span className="cat-tag">{dish.category}</span>
          <h2>{dish.name}</h2>
          <p>{dish.full}</p>
          <div className="price">{dish.price} ₽</div>
          <div className="modal-actions">
            <button className="btn" onClick={handleAdd}>
              {added ? '✓ Добавлено' : 'В корзину'}
            </button>
            <button className="btn btn-ghost" onClick={onClose}>
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}