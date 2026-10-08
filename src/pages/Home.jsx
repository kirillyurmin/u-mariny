import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle('Главная');
  const revealWhy = useReveal();
  const revealPop = useReveal();
  const revealCta = useReveal();

  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>У Марины</h1>
          <p>Как дома, только вкуснее. Уютное кафе с домашней кухней в центре города.</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn">Смотреть меню</Link>
            <Link to="/booking" className="btn btn-outline">Забронировать стол</Link>
          </div>
        </div>
      </section>

      {/* ПОЧЕМУ У НАС */}
      <section className="section">
        <div className="container reveal" ref={revealWhy}>
          <h2 className="section-title">Почему у нас</h2>
          <p className="section-sub">Три причины заглянуть на огонёк</p>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">🥣</div>
              <h3>Домашняя кухня</h3>
              <p>Готовим каждый день из свежих продуктов, как для своих близких.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌿</div>
              <h3>Свежие продукты</h3>
              <p>Работаем с местными фермерами и пекарнями. Никаких полуфабрикатов.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">☕</div>
              <h3>Уютная атмосфера</h3>
              <p>Мягкий свет, приятная музыка и запах свежего кофе. Заходите погреться.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ПОПУЛЯРНОЕ */}
      <section className="section" style={{ background: 'var(--milk-dark)' }}>
        <div className="container reveal" ref={revealPop}>
          <h2 className="section-title">Популярное</h2>
          <p className="section-sub">Что чаще всего заказывают гости</p>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">🍲</div>
              <h3>Борщ с пампушками</h3>
              <p>Наш хит — насыщенный борщ по домашнему рецепту.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🍰</div>
              <h3>Медовик</h3>
              <p>Многослойный, с нежным сметанным кремом.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">☕</div>
              <h3>Капучино</h3>
              <p>Из свежеобжаренных зёрен, с плотной пенкой.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container reveal" ref={revealCta} style={{ textAlign: 'center' }}>
          <h2 className="section-title">Заходите в гости</h2>
          <p className="section-sub">Забронируйте столик — мы всё подготовим</p>
          <Link to="/booking" className="btn">Забронировать стол</Link>
        </div>
      </section>
    </div>
  );
}