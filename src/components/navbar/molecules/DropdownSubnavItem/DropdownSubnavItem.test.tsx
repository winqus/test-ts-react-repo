import { render, screen } from '@testing-library/react';
import DropdownSubnavItem from './DropdownSubnavItem';

test('On render input values are shown.', () => {
  const inputTitle = 'My Item';

  render(
    <DropdownSubnavItem
      title={inputTitle}
      href="#myItem"
      icon={<div data-testid="icon1">My Icon</div>}
      onClick={jest.fn()}
    />,
  );
  const titleElement = screen.getByText(inputTitle);
  const buttonElement = screen.getByLabelText('OpenNav');
  const iconElement = screen.getByTestId('icon1');

  expect(titleElement).toBeVisible();
  expect(iconElement).toBeVisible();
  expect(buttonElement).toBeVisible();
});
