import { render, screen } from '@testing-library/react';
import DropdownSearchItem from './DropdownSearchItem';

test('On render placeholder text is shown and has no input value.', () => {
  const expectedTitle = 'SearchItem';

  render(
    <DropdownSearchItem
      title={expectedTitle}
    />,
  );
  const inputElement = screen.getByPlaceholderText(expectedTitle);
  const buttonElement = screen.getByLabelText('Search');

  expect(inputElement).toBeVisible();
  expect(buttonElement).toBeVisible();
});
