import { render, screen } from '@testing-library/react';
import SocialLinks from './SocialLinks';

test('renders LinkedIn and Mail links', () => {
  render(<SocialLinks />);

  const linkedInElement = screen.getByText(/linkedin/i);
  const mailElement = screen.getByText(/mail/i);

  expect(linkedInElement).toBeInTheDocument();
  expect(mailElement).toBeInTheDocument();
});
