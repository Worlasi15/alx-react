import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('verifies handleDisplayDrawer is called when menu item is clicked', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawer}
      />
    );
    wrapper.find('button').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('verifies handleHideDrawer is called when close button is clicked', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={handleHideDrawer}
      />
    );
    wrapper.find('button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
