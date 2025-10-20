import { render, screen } from '@testing-library/react';
import Portfolio from '../Portfolio';

test('renders title in Portfolio', () => {
  render(<Portfolio />);
  const titleElement = screen.getByText(/portfolio/i); // adjust based on actual text
  expect(titleElement).toBeInTheDocument();
});
