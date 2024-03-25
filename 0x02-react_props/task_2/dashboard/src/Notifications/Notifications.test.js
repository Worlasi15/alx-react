import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

test('renders without crashing', () => {
  render(<Notifications />);
});

test('renders NotificationItem elements', () => {
  const { getAllByTestId } = render(<Notifications />);
  const notificationItems = getAllByTestId('notification-item');
  expect(notificationItems.length).toBe(3); // Assuming 3 NotificationItem elements are rendered
});

test('renders the correct html for the first NotificationItem element', () => {
  const { getByTestId } = render(<Notifications />);
  const notificationItem = getByTestId('notification-item');
  expect(notificationItem).toHaveTextContent('Notification 1');
});
