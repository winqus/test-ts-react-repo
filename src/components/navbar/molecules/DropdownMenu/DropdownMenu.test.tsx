import { render, screen } from '@testing-library/react';
import DropdownMenu from './DropdownMenu';
import { MenuItem } from './DropdownMenu.interfaces';

const exampleInputMenuData: MenuItem[] = [
  {
    title: 'Search',
    inputValue: '',
    isSearchBar: true,
  },
  {
    title: 'Home',
    href: '#home',
  },
  {
    title: 'Submenu',
    href: '$submenu',
    isSubmenu: true,
    submenuItems: [
      {
        title: 'Item A',
        href: '#itemA',
      },
      {
        title: 'Item B',
        href: '#itemB',
      },
    ],
  },
];

test('On render menus exist and are hidden.', () => {
  render(
    <DropdownMenu
      open={false}
      activeMenu="main"
      onChangeMenu={jest.fn()}
      menuData={exampleInputMenuData}
    />,
  );
  const dropdownMenuElements = screen.getAllByRole('list');

  expect(dropdownMenuElements.length).toBe(2);
  dropdownMenuElements.forEach((element) => {
    expect(element).toHaveClass('nav-menu__list');
    expect(element.getAttribute('class')).toMatch(/nav-menu__list--hide/);
  });
});
