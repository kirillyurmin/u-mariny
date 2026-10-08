import { useReveal } from '../hooks/useReveal';
import { usePageTitle } from '../hooks/usePageTitle';
export default function Contacts() {
  usePageTitle('Контакты');
  const revealContacts = useReveal();
    return (
      <div className="page-enter">
        <section className="section">
          <div className="container">
            <h2 className="section-title">Контакты</h2>
            <p className="section-sub">Мы всегда рады видеть вас в гостях</p>
  
            <div className="contacts-grid reveal" ref={revealContacts}>
              <div>
                <div className="contact-card">
                  <div className="ic">📍</div>
                  <div>
                    <h3>Адрес</h3>
                    <p>г. Москва, ул. Тёплая, 12</p>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="ic">📞</div>
                  <div>
                    <h3>Телефон</h3>
                    <p>
                      <a href="tel:+74951234567">+7 (495) 123-45-67</a>
                    </p>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="ic">✉️</div>
                  <div>
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:hello@umariny.ru">hello@umariny.ru</a>
                    </p>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="ic">🕐</div>
                  <div>
                    <h3>Часы работы</h3>
                    <p>Ежедневно с 9:00 до 23:00</p>
                  </div>
                </div>
              </div>
  
              <div className="map-frame">
                <iframe
                  title="Карта"
                  src="https://yandex.ru/map-widget/v1/?ll=37.617700%2C55.755800&z=15"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }