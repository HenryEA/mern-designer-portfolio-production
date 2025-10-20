import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

test('renders title in Contact', () => {
  render(<Contact />);
  const titleElement = screen.getByText(/contact/i);
  expect(titleElement).toBeInTheDocument();
});
