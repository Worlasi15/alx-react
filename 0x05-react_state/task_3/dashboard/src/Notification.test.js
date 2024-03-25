import React from 'react';
import PropTypes from 'prop-types';

class Notifications extends React.PureComponent {
  render() {
    return (
      <div className="Notifications">
        <ul>
          {this.props.listNotifications.map(notification => (
            <li key={notification.id} onClick={() => this.props.markNotificationAsRead(notification.id)}>
              {notification.content}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired
    })
  ),
  markNotificationAsRead: PropTypes.func.isRequired
};

Notifications.defaultProps = {
  listNotifications: []
};

export default Notifications;
