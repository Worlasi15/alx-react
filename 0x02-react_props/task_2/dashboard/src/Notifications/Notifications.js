import React from 'react';
import NotificationItem from './NotificationItem';

export default function Notifications() {
  return (
    <ul className="Notifications">
      <NotificationItem type="default" value="Notification 1" />
      <NotificationItem type="urgent" value="Notification 2" />
      <NotificationItem type="urgent" value="Notification 3" />
    </ul>
  );
}
