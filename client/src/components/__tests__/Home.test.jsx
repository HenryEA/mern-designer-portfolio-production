import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('renders title in Home', () => {
  render(<Home />);
  const titleElement = screen.getByText(/graphics designer/i); // adjust based on actual text
  expect(titleElement).toBeInTheDocument();
});
