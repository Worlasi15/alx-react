import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// Test that App renders without crashing
test('App renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

// Test that App renders a div with the class App-header
test('App renders App-header div', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-header').exists()).toBe(true);
});

// Test that App renders a div with the class App-body
test('App renders App-body div', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-body').exists()).toBe(true);
});

// Test that App renders a div with the class App-footer
test('App renders App-footer div', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-footer').exists()).toBe(true);
});
