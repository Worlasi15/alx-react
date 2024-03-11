import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

// Test that Notifications renders without crashing
test('Notifications renders without crashing', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.exists()).toBe(true);
});

// Test that Notifications renders three list items
test('Notifications renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('li')).toHaveLength(3);
});

// Test that Notifications renders the text "Here is the list of notifications"
test('Notifications renders the text "Here is the list of notifications"', () => {
  const wrapper = shallow(<Notifications />);
  const text = 'Here is the list of notifications';
  expect(wrapper.contains(text)).toBe(true);
});
