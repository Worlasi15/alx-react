import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { AppContext } from '../App/AppContext';

describe('<Footer />', () => {
  it('verifies that the link is not displayed when the user is logged out', () => {
    const wrapper = shallow(
      <Footer />,
      {
        context: {
          user: {
            email: '',
            password: '',
            isLoggedIn: false
          }
        }
      }
    );
    expect(wrapper.find('a').exists()).toBe(false);
  });

  it('verifies that the link is displayed when the user is logged in', () => {
    const wrapper = shallow(
      <Footer />,
      {
        context: {
          user: {
            email: 'test@example.com',
            password: 'password123',
            isLoggedIn: true
          }
        }
      }
    );
    expect(wrapper.find('a').exists()).toBe(true);
  });
});
