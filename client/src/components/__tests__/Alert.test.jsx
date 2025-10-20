import { render, screen } from '@testing-library/react';
import Alert from './Alert';
import { useAppContext } from '../context/appContext';

jest.mock('../context/appContext');

test('renders alert text in Alert component', () => {
  useAppContext.mockReturnValue({
    alertType: 'success',
    alertText: 'Profile updated successfully',
  });

  render(<Alert />);

  const titleElement = screen.getByText(/Profile updated successfully/i);
  expect(titleElement).toBeInTheDocument();
});
