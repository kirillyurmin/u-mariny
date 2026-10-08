import { useEffect } from 'react';

export function usePageTitle(title) {
  useEffect(() => {
    const prev = document.title;
    document.title = title ? `${title} · У Марины` : 'У Марины';
    return () => {
      document.title = prev;
    };
  }, [title]);
}