import './Cart.scss';
import { useState, useRef, useEffect } from 'react';
import NavButton from '../../atoms/NavButton/NavButton';
import { DropdownItem } from './Cart.interfaces';

interface CartProps {
  count: number;
  value: string;
  icon: React.ReactNode;
  dropdownItems?: DropdownItem[];
}

export default function Cart({
  count, value, icon, dropdownItems = [],
}: CartProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as HTMLElement)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef as React.LegacyRef<HTMLDivElement>} className="nav-menu__cart-dropdown">
      <NavButton onClick={() => setIsOpen(!isOpen)}>
        {icon}
        <div className="nav-menu__btnText">{count}</div>
      </NavButton>
      <ul className={`nav-menu__cart-dropdown-content ${isOpen ? 'nav-menu__cart-dropdown-content--show' : ''}`}>
        <li className="nav-menu__cart-dropdown-item nav-menu__cart-dropdown-item--non-selectable">{value}</li>
        {dropdownItems.map((item, index) => (
          <a href={item.href} className="nav-menu__cart-dropdown-item" key={index}>{item.name}</a>
        ))}
      </ul>
    </div>
  );
}
