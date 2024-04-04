import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { bindActionCreators } from 'redux';

const boundActionCreators = {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer
};

export default bindActionCreators(boundActionCreators, dispatch);
