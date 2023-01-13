import { render, screen } from '@testing-library/react';
import { MenuItem } from '../../molecules/DropdownMenu/DropdownMenu.interfaces';
import Navbar from './Navbar';

const exampleMenuData: MenuItem[] = [
  {
    title: 'Home',
    href: '#home',
  },
];

test('On render shows title and cart values', () => {
  const inputTitle = 'My title';

  const { container } = render(
    <Navbar
      title={inputTitle}
      menuData={exampleMenuData}
    />,
  );
  const headerElement = screen.getByRole('banner');
  const titleElement = screen.getByText(inputTitle);
  const iconGroupElement = container.getElementsByClassName('nav-menu__icon-group')[0];

  expect(titleElement).toBeVisible();
  expect(titleElement).toHaveClass('nav-menu__title');
  expect(iconGroupElement).toBeVisible();
  expect(headerElement).toBeVisible();
  expect(headerElement).toContainElement(titleElement);
});
