import './DropdownItem.scss';

interface DropdownItemProps {
  title: string;
  href: string;
}

function DropdownItem({ title, href }: DropdownItemProps) {
  return (
    <a href={href} className="nav-menu__item">{title}</a>
  );
}

export default DropdownItem;
