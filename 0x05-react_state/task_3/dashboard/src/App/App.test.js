import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('verifies that markNotificationAsRead updates the state correctly', () => {
    const wrapper = mount(
      <App />
    );
    const notifications = [
      { id: 1, content: 'Notification 1' },
      { id: 2, content: 'Notification 2' },
      { id: 3, content: 'Notification 3' }
    ];
    wrapper.setState({ listNotifications: notifications });
    wrapper.instance().markNotificationAsRead(2);
    expect(wrapper.state('listNotifications')).toHaveLength(2);
    expect(wrapper.state('listNotifications')).toEqual(
      expect.not.arrayContaining([{ id: 2, content: 'Notification 2' }])
    );
  });
});
