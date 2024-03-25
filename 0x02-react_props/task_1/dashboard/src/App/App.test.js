import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from 'path-to-Notifications'; // Adjust the import path

describe('App Component', () => {
  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Notifications />)).toEqual(true);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });
});
