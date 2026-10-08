import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Booking() {
  usePageTitle('Бронирование');
  const revealForm = useReveal();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    comment: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        comment: '',
      });
    }, 4000);
  };

  return (
    <div className="page-enter">
      <section className="section">
        <div className="container">
          <h2 className="section-title">Бронирование</h2>
          <p className="section-sub">
            Оставьте заявку — мы свяжемся с вами для подтверждения
          </p>

          <form className="form-card reveal" ref={revealForm} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ваше имя *</label>
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

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Дата *</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Время *</label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  required
                  value={form.time}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="guests">Количество гостей</label>
              <select
                id="guests"
                name="guests"
                value={form.guests}
                onChange={handleChange}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'гость' : n < 5 ? 'гостя' : 'гостей'}
                  </option>
                ))}
                <option value="9+">Больше 8</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="comment">Комментарий</label>
              <textarea
                id="comment"
                name="comment"
                value={form.comment}
                onChange={handleChange}
                placeholder="Пожелания, день рождения, аллергии..."
              />
            </div>

            <button type="submit" className="btn" style={{ width: '100%' }}>
              Забронировать
            </button>

            {sent && (
              <div className="success-msg">
                ✅ Спасибо! Мы свяжемся с вами в ближайшее время для
                подтверждения брони.
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}