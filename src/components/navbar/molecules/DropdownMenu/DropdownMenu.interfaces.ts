export interface MenuLinkItem {
  title: string;
  href: string;
}

export interface MenuSearchItem {
  title: string;
  inputValue: string;
  isSearchBar: boolean;
}

export interface MenuSubmenuItem {
  title: string;
  href: string;
  isSubmenu: boolean;
  submenuItems: MenuItem[];
}

export interface Submenu {
  items: MenuItem[];
  name: string;
  returnMenuName?: string;
  animationDirection: 'horizontal' | 'vertical';
}

export type MenuItem = (MenuLinkItem | MenuSearchItem | MenuSubmenuItem);
