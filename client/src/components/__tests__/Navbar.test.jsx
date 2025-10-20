import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

test('renders title in Navbar', () => {
  render(<Navbar />);
  const titleElement = screen.getByText(/henry anene/i);
  expect(titleElement).toBeInTheDocument();
});
