import { useState } from 'react';
import { dishes, categories } from '../data/dishes';
import DishModal from '../components/DishModal';
import { useCart } from '../context/CartContext';
import { useReveal } from '../hooks/useReveal';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Menu() {
  usePageTitle('Меню');
  const [activeCat, setActiveCat] = useState('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const { add } = useCart();
  const revealGrid = useReveal();

  const filtered = dishes.filter((d) => {
    const matchCat = activeCat === 'all' || d.category === activeCat;
    const matchQuery = d.name.toLowerCase().includes(query.toLowerCase().trim());
    return matchCat && matchQuery;
  });

  const handleQuickAdd = (e, dish) => {
    e.stopPropagation();
    add(dish);
  };

  return (
    <div className="page-enter">
      <section className="section">
        <div className="container">
          <h2 className="section-title">Меню</h2>
          <p className="section-sub">Готовим каждый день из свежих продуктов</p>

          <div className="menu-search">
            <input
              type="text"
              placeholder="🔍 Поиск по меню..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="filters">
            {categories.map((c) => (
              <button
                key={c.id}
                className={`filter-btn ${activeCat === c.id ? 'active' : ''}`}
                onClick={() => setActiveCat(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="empty-msg">Ничего не найдено 😔</p>
          ) : (
            <div className="menu-grid reveal" ref={revealGrid}>
              {filtered.map((d) => (
                <div
                  key={d.id}
                  className="menu-card"
                  onClick={() => setSelected(d)}
                >
                  <img src={d.img} alt={d.name} />
                  <div className="menu-card-body">
                    <span className="cat-tag">
                      {categories.find((c) => c.id === d.category)?.label}
                    </span>
                    <h3>{d.name}</h3>
                    <p>{d.short}</p>
                    <div className="menu-card-footer">
                      <div className="price">{d.price} ₽</div>
                      <button
                        className="btn-add"
                        onClick={(e) => handleQuickAdd(e, d)}
                        aria-label="В корзину"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selected && (
        <DishModal dish={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}