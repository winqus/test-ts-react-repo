import './NavButton.scss';

interface NavButtonProps {
  onClick: () => void,
  children: React.ReactNode | React.ReactNode[],
  isRightmost?: boolean,
}

export default function NavButton({ onClick, children, isRightmost = false }: NavButtonProps) {
  return (
    <button type="button" onClick={onClick} className={`nav-menu__btn ${isRightmost ? 'nav-menu__btn--rightMost' : ''}`}>
      {children}
    </button>
  );
}
