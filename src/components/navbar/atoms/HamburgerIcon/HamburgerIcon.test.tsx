import { render } from '@testing-library/react';
import HamburgerIcon from './HamburgerIcon';

test('On render is visible and in closed state.', () => {
  const expectedStateOpen = false;

  const { container } = render(<HamburgerIcon open={expectedStateOpen} />);
  const element = container.getElementsByClassName('icon-hamburger')[0];

  expect(container.getElementsByClassName('icon-hamburger')).toHaveLength(1);
  expect(element).toBeEnabled();
  expect(element).toBeVisible();
  expect(element).not.toHaveClass('icon-hamburger--active');
});

test('Has active class when in open state.', () => {
  const expectedStateOpen = true;

  const { container } = render(<HamburgerIcon open={expectedStateOpen} />);
  const element = container.getElementsByClassName('icon-hamburger')[0];

  expect(container.getElementsByClassName('icon-hamburger')).toHaveLength(1);
  expect(element).toBeEnabled();
  expect(element).toBeVisible();
  expect(element).toHaveClass('icon-hamburger--active');
});
