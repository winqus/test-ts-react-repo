import { useState, useRef, useEffect } from 'react';
import HamburgerIcon from '../../atoms/HamburgerIcon/HamburgerIcon';
import NavButton from '../../atoms/NavButton/NavButton';
import DropdownMenu from '../../molecules/DropdownMenu/DropdownMenu';
import { MenuItem } from '../../molecules/DropdownMenu/DropdownMenu.interfaces';

interface HamburgerDropdownProps {
  menuData: MenuItem[];
}

export default function HamburgerDropdown({ menuData }: HamburgerDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState('main');
  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpen);

    if (!isOpen) {
      setCurrentMenu('main');
    }
  }, [isOpen]);

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
    <div ref={dropdownRef as React.LegacyRef<HTMLDivElement>}>
      <NavButton onClick={() => setIsOpen(!isOpen)} isRightmost>
        <HamburgerIcon open={isOpen} />
      </NavButton>

      <DropdownMenu
        open={isOpen}
        activeMenu={currentMenu}
        onChangeMenu={setCurrentMenu}
        menuData={menuData}
      />
    </div>
  );
}
