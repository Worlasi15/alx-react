import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

test('renders login form', () => {
  const { getByLabelText } = render(<Login />);
  const usernameInput = getByLabelText('Username:');
  const passwordInput = getByLabelText('Password:');
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});
