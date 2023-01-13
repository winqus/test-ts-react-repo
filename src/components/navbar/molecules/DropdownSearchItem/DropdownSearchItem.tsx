import './DropdownSearchItem.scss';
import { navSearchIcon } from '../../atoms/Icons';

interface DropdownSearchItemProps {
  title: string;
  inputValue?: string;
}

export default function DropdownSearchItem({
  title = 'Search for something', inputValue = '',
}: DropdownSearchItemProps) {
  return (
    <div className="nav-menu__search-item">
      <input type="text" className="nav-menu__search-item-input" placeholder={title} defaultValue={inputValue} />
      <button type="button" aria-label="Search">{navSearchIcon}</button>
    </div>
  );
}
