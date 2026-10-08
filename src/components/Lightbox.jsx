import { useEffect } from 'react';

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox" onClick={onClose}>
      <button
        className="lightbox-nav prev"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Назад"
      >‹</button>
      <img
        src={images[index]}
        alt={`Фото ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="lightbox-nav next"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Вперёд"
      >›</button>
    </div>
  );
}