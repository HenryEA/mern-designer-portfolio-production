import { render } from '@testing-library/react';
import Logout from './Logout';
import { useAppContext } from '../context/appContext';

jest.mock('../context/appContext');

test('calls logoutUser on render', () => {
  const mockLogout = jest.fn();
  useAppContext.mockReturnValue({
    logoutUser: mockLogout,
    user: { name: 'Test' },
  });

  render(<Logout />);

  expect(mockLogout).toHaveBeenCalled();
});
