import { render, screen } from '@testing-library/react';
import ComponentShowingUseState from './ComponentShowingUseState';

test('renders learn react link', () => {
  render(<ComponentShowingUseState />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
