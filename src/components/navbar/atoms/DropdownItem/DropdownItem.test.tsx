import { render, screen } from '@testing-library/react';
import DropdownItem from './DropdownItem';

test('On render is enabled and displays text.', () => {
  const expectedHref = '/works';
  const expectedTitle = 'Some title';

  render(<DropdownItem href={expectedHref} title={expectedTitle} />);
  const element = screen.getByText(expectedTitle);

  expect(element).toBeInTheDocument();
  expect(element).toBeEnabled();
  expect(element).toBeVisible();
  expect(element).toHaveClass('nav-menu__item');
  expect(element).toHaveAttribute('href', expectedHref);
});
