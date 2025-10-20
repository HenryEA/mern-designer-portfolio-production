import { render, screen } from '@testing-library/react';
import Experience from '../Experience';

test('renders title in Experience', () => {
  render(<Experience />);
  const titleElement = screen.getByText(/experience/i);
  expect(titleElement).toBeInTheDocument();
});
