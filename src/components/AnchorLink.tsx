import { useNavigate, useLocation } from 'react-router-dom';

interface AnchorLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export default function AnchorLink({ to, children, className }: AnchorLinkProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const [path, hash] = to.split('#');
    const targetHash = hash ? `#${hash}` : '';

    if (location.pathname === path || (path === '/' && location.pathname === '/')) {
      // 同じページ内の場合は直接スクロール
      const element = document.querySelector(targetHash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // 別のページの場合は遷移してからスクロール
      navigate(to);
      // 遷移後にスクロール（少し遅延を入れる）
      setTimeout(() => {
        const element = document.querySelector(targetHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}




