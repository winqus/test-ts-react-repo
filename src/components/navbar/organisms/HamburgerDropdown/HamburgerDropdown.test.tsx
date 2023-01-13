import { render, screen, fireEvent } from '@testing-library/react';
import { MenuItem } from '../../molecules/DropdownMenu/DropdownMenu.interfaces';
import HamburgerDropdown from './HamburgerDropdown';

const exampleMenuData: MenuItem[] = [
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

test('On hamburger icon click menu opens.', () => {
  const { container } = render(<HamburgerDropdown menuData={exampleMenuData} />);
  const menuElement = container.getElementsByClassName('nav-menu__list--hide-vertical')[0];

  fireEvent.click(container.getElementsByClassName('icon-hamburger')[0]);

  expect(menuElement).toBeVisible();
});

test('On submenu item click menu changes.', () => {
  const { container } = render(<HamburgerDropdown menuData={exampleMenuData} />);
  const mainMenuOpenElement = container.getElementsByClassName('nav-menu__list--hide-vertical')[0];
  const submenuElement = container.getElementsByClassName('nav-menu__list--hide-horizontal')[0];

  fireEvent.click(container.getElementsByClassName('icon-hamburger')[0]);
  fireEvent.click(screen.getByText('Submenu'));

  expect(mainMenuOpenElement).not.toHaveClass('nav-menu__list--show-vertical');
  expect(submenuElement).toHaveClass('nav-menu__list--show-horizontal');
});

test('On submenu back item click menu changes to main.', () => {
  const { container } = render(<HamburgerDropdown menuData={exampleMenuData} />);
  const mainMenuOpenElement = container.getElementsByClassName('nav-menu__list--hide-vertical')[0];
  const submenuElement = container.getElementsByClassName('nav-menu__list--hide-horizontal')[0];

  fireEvent.click(container.getElementsByClassName('icon-hamburger')[0]);
  fireEvent.click(screen.getByText('Submenu'));
  fireEvent.click(screen.getByText('BACK'));

  expect(mainMenuOpenElement).toHaveClass('nav-menu__list--show-vertical');
  expect(submenuElement).not.toHaveClass('nav-menu__list--show-horizontal');
});
