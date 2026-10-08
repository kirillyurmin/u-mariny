import { useReveal } from '../hooks/useReveal';
import { usePageTitle } from '../hooks/usePageTitle';

export default function About() {
    usePageTitle('О нас');
    const revealAbout = useReveal();
    const revealTeam = useReveal();
    const revealGallery = useReveal();
    const gallery = [
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    ];
  
    return (
      <div className="page-enter">
        <section className="section">
          <div className="container">
          <div className="about-grid reveal" ref={revealAbout}>
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80"
                alt="О кафе"
              />
              <div className="about-text">
                <h2>Наша история</h2>
                <p>
                  Кафе «У Марины» открылось в 2015 году как маленькое семейное
                  место на 12 посадочных мест. Марина сама стояла у плиты и
                  готовила по рецептам, которые передавались в её семье из
                  поколения в поколение.
                </p>
                <p>
                  Сегодня мы выросли, но принципы остались те же: свежие
                  продукты, домашняя кухня и атмосфера, в которую хочется
                  возвращаться.
                </p>
                <div className="stats">
                  <div className="stat">
                    <div className="num">9</div>
                    <div className="lbl">лет опыта</div>
                  </div>
                  <div className="stat">
                    <div className="num">40+</div>
                    <div className="lbl">блюд в меню</div>
                  </div>
                  <div className="stat">
                    <div className="num">1000+</div>
                    <div className="lbl">гостей в месяц</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section className="section" style={{ background: 'var(--milk-dark)' }}>
          <div className="container reveal" ref={revealTeam}>
            <h2 className="section-title">Наша команда</h2>
            <p className="section-sub">Люди, которые готовят для вас</p>
            <div className="features">
              <div className="feature">
                <div className="feature-icon">👩‍🍳</div>
                <h3>Марина</h3>
                <p>Основатель и шеф-повар. Готовит по семейным рецептам.</p>
              </div>
              <div className="feature">
                <div className="feature-icon">👨‍🍳</div>
                <h3>Алексей</h3>
                <p>Су-шеф. Отвечает за горячее и мясные блюда.</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🧑‍🍳</div>
                <h3>Ольга</h3>
                <p>Кондитер. Автор наших десертов и выпечки.</p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="section">
        <div className="container reveal" ref={revealTeam}>
            <h2 className="section-title">Как у нас внутри</h2>
            <p className="section-sub">Немного атмосферы</p>
            <div className="gallery">
              {gallery.map((src, i) => (
                <img key={i} src={src} alt={`Интерьер ${i + 1}`} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }