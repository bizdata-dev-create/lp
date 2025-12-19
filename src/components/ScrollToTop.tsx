import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // ハッシュがある場合は、該当セクションにスクロール
      const element = document.querySelector(hash);
      if (element) {
        // 少し遅延を入れて、DOMが完全にレンダリングされた後にスクロール
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      // ハッシュがない場合は、トップにスクロール
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

