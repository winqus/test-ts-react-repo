import { render, screen, fireEvent } from '@testing-library/react';
import NavButton from './NavButton';

test('On render is visible and is clickable.', () => {
  const handleClick = jest.fn();

  render(<NavButton onClick={handleClick}>My button</NavButton>);
  const element = screen.getByRole('button');
  fireEvent.click(element);

  expect(element).toBeEnabled();
  expect(element).toBeVisible();
  expect(element).toHaveClass('nav-menu__btn');
  expect(element).not.toHaveClass('nav-menu__btn--rightMost');
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('On render has children.', () => {
  const handleClick = jest.fn();

  render(
    <NavButton onClick={handleClick}>
      <h1>Some text</h1>
      <h2>Some more text</h2>
    </NavButton>,
  );
  const element = screen.getByRole('button');
  const child1 = screen.getByText('Some text');
  const child2 = screen.getByText('Some more text');

  expect(element).toBeVisible();
  expect(child1).toBeVisible();
  expect(child2).toBeVisible();
  expect(element).toContainElement(child1);
  expect(element).toContainElement(child2);
});

test('When isRightmost true, has necessary classes.', () => {
  const handleClick = jest.fn();

  render(<NavButton onClick={handleClick} isRightmost>My button</NavButton>);
  const element = screen.getByRole('button');

  expect(element).toHaveClass('nav-menu__btn', 'nav-menu__btn--rightMost');
});
