import './DropdownSubnavItem.scss';

interface DropdownSubnavItemProps {
  title: string;
  href: string;
  icon: React.ReactNode;
  iconPlacedLeft?: boolean;
  onClick: () => void;
}

export default function DropdownSubnavItem({
  href, title, icon, iconPlacedLeft = false, onClick,
}: DropdownSubnavItemProps) {
  return (
    <div role="button" onClick={onClick} onKeyDown={onClick} tabIndex={0} id="featuresBtn" className="nav-menu__item">
      {!iconPlacedLeft && (<a href={href}>{title}</a>)}
      <button type="button" className="nav-menu__button" aria-label="OpenNav">
        {icon}
      </button>
      {iconPlacedLeft && (<a href={href}>{title}</a>)}
    </div>
  );
}
