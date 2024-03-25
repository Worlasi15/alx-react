import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('verifies that the logoutSection is not created when isLoggedIn is false', () => {
    const wrapper = shallow(
      <Header />
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('verifies that the logoutSection is created when isLoggedIn is true', () => {
    const wrapper = shallow(
      <Header />,
      {
        context: {
          user: {
            email: 'test@example.com',
            password: 'password123',
            isLoggedIn: true
          },
          logOut: () => {}
        }
      }
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
  });

  it('verifies that clicking on the logout link calls the logOut function', () => {
    const logOutSpy = jest.fn();
    const wrapper = shallow(
      <Header />,
      {
        context: {
          user: {
            email: 'test@example.com',
            password: 'password123',
            isLoggedIn: true
          },
          logOut: logOutSpy
        }
      }
    );
    wrapper.find('a').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});
