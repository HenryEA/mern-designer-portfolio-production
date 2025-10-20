import { render, screen } from '@testing-library/react';
import About from '../About';

test('renders title in About', () => {
  render(<About />);
  const titleElement = screen.getByText(/about/i);
  expect(titleElement).toBeInTheDocument();
});
