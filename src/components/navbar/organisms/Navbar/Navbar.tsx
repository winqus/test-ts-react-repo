import './Navbar.scss';
import Cart from '../../molecules/Cart/Cart';
import { navCartIcon, navVerticalLineIcon } from '../../atoms/Icons';
import { DropdownItem as CartDropdownItem } from '../../molecules/Cart/Cart.interfaces';
import HamburgerDropdown from '../HamburgerDropdown/HamburgerDropdown';
import { MenuItem } from '../../molecules/DropdownMenu/DropdownMenu.interfaces';

interface NavbarProps {
  title: string;
  cartCount?: number;
  cartValue?: string;
  cartDropdownItems?: CartDropdownItem[];
  menuData: MenuItem[];
}

export default function Navbar({
  title, cartCount = 0, cartValue = '$0.00', cartDropdownItems = [], menuData,
}: NavbarProps) {
  return (
    <header className="nav-menu nav-menu__header">
      <a href="./" className="nav-menu__title">
        {title}
      </a>
      <div className="nav-menu__icon-group">
        <Cart
          count={cartCount}
          value={cartValue}
          icon={navCartIcon}
          dropdownItems={cartDropdownItems}
        />
        {navVerticalLineIcon}
        <HamburgerDropdown menuData={menuData} />
      </div>
    </header>
  );
}
