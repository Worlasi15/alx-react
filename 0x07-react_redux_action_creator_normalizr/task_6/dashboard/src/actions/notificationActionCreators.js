import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { bindActionCreators } from 'redux';

const boundActionCreators = {
  markAsRead,
  setNotificationFilter
};

export default bindActionCreators(boundActionCreators, dispatch);
