import './DropdownMenu.scss';
import { useMemo } from 'react';
import DropdownItem from '../../atoms/DropdownItem/DropdownItem';
import DropdownSearchItem from '../DropdownSearchItem/DropdownSearchItem';
import DropdownSubnavItem from '../DropdownSubnavItem/DropdownSubnavItem';
import { arrowLeftFeaturesIcon, arrowRightFeaturesIcon } from '../../atoms/Icons';
import { MenuItem, MenuSubmenuItem, Submenu } from './DropdownMenu.interfaces';

interface DropdownMenuProps {
  open?: boolean;
  activeMenu?: string;
  onChangeMenu: (targetMenuName: string) => void;
  menuData: MenuItem[];
}

export default function DropdownMenu({
  open = false, activeMenu = 'main', onChangeMenu, menuData,
}: DropdownMenuProps) {
  const isMenuItemASearchBar = (item: Object) => ('isSearchBar' in item);
  const isMenuItemASubmenu = (item: Object) => ('isSubmenu' in item);
  const makeUniqueMenuName = (item: MenuSubmenuItem) => `${item.title}${item.href}`;
  const getItemHref = (item: MenuItem) => ('href' in item ? item.href : '/#noHrefAssigned');

  const menus = useMemo<Submenu[]>(() => {
    const submenus: Submenu[] = [];
    const generateMenu = (
      submenuItem: MenuSubmenuItem,
      menuName: string,
      isVerticalAnimation: boolean,
      returnMenuName?: string,
    ) => {
      const newSubmenu: Submenu = {
        items: [],
        name: menuName,
        returnMenuName,
        animationDirection: isVerticalAnimation ? 'vertical' : 'horizontal',
      };
      submenuItem.submenuItems.forEach((item) => {
        if (isMenuItemASubmenu(item)) {
          generateMenu(
            item as MenuSubmenuItem,
            makeUniqueMenuName(item as MenuSubmenuItem),
            false,
            makeUniqueMenuName(submenuItem),
          );
        }
        newSubmenu.items.push(item);
      });
      submenus.push(newSubmenu);
    };

    generateMenu({
      title: 'main', href: '', isSubmenu: false, submenuItems: menuData,
    } as MenuSubmenuItem, 'main', true);

    return submenus;
  }, [menuData]);

  return (
    <>
      {
        menus.map((menu, menuIndex) => (
          <ul key={menuIndex} className={`nav-menu__list nav-menu__list--${open && activeMenu === menu.name ? 'show' : 'hide'}-${menu.animationDirection}`}>
            {menu.returnMenuName
            && (
              <DropdownSubnavItem
                href="/#"
                title="BACK"
                onClick={() => onChangeMenu(menu.returnMenuName ?? '')}
                icon={arrowLeftFeaturesIcon}
                iconPlacedLeft
              />
            )}
            {
              menu.items.map((item, itemIndex) => {
                if (isMenuItemASearchBar(item)) {
                  return <DropdownSearchItem key={itemIndex} title={item.title} />;
                }
                if (isMenuItemASubmenu(item)) {
                  return (
                    <DropdownSubnavItem
                      key={itemIndex}
                      href={getItemHref(item)}
                      title={item.title}
                      onClick={() => onChangeMenu(makeUniqueMenuName(item as MenuSubmenuItem))}
                      icon={arrowRightFeaturesIcon}
                    />
                  );
                }
                return <DropdownItem key={itemIndex} title={item.title} href={getItemHref(item)} />;
              })
            }
          </ul>
        ))
      }
    </>
  );
}
