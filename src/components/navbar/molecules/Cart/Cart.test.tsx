import { render, screen, fireEvent } from '@testing-library/react';
import Cart from './Cart';
import { DropdownItem } from './Cart.interfaces';

const inputCount = 303;
const inputValue = '$3456.20';
const inputIcon = <div>My Icon</div>;
const inputDropdownItems: DropdownItem[] = [
  { name: 'Item 1', href: '#href1' },
  { name: 'Item 2', href: '#href2' },
];

test('On render icon with number is visible and dropdown is not.', () => {
  render(
    <Cart
      count={inputCount}
      value={inputValue}
      icon={inputIcon}
      dropdownItems={inputDropdownItems}
    />,
  );
  const iconElement = screen.getByText('My Icon');
  const countElement = screen.getByText(`${inputCount}`);
  const dropdownElement = screen.getByRole('list');

  expect(iconElement).toBeVisible();
  expect(countElement).toBeVisible();
  expect(dropdownElement).not.toHaveClass('nav-menu__cart-dropdown-content--show');
});

test('On icon click dropdown is open and items visible.', () => {
  render(
    <Cart
      count={inputCount}
      value={inputValue}
      icon={inputIcon}
      dropdownItems={inputDropdownItems}
    />,
  );
  const iconElement = screen.getByText('My Icon');
  const dropdownElement = screen.getByRole('list');
  fireEvent.click(iconElement);

  expect(iconElement).toBeVisible();
  expect(dropdownElement).toHaveClass('nav-menu__cart-dropdown-content--show');
  expect(screen.getByText('$3456.20')).toBeVisible();
  expect(screen.getByText('Item 1')).toBeVisible();
  expect(screen.getByText('Item 2')).toBeVisible();
});

test('On click off of dropdown it is closed.', () => {
  render(
    <>
      <Cart
        count={inputCount}
        value={inputValue}
        icon={inputIcon}
        dropdownItems={inputDropdownItems}
      />
      <span>Some other element</span>
    </>,
  );
  const iconElement = screen.getByText('My Icon');
  const dropdownElement = screen.getByRole('list');
  const otherElement = screen.getByText('Some other element');

  fireEvent.click(iconElement);
  fireEvent.click(otherElement);

  expect(dropdownElement).toHaveClass('nav-menu__cart-dropdown-content');
  expect(dropdownElement).not.toHaveClass('nav-menu__cart-dropdown-content--show');
});
