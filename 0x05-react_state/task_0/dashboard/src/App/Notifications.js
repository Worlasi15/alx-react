import React from 'react';
import PropTypes from 'prop-types';

class Notifications extends React.Component {
  render() {
    return (
      <div className="Notifications">
        <button onClick={this.props.handleDisplayDrawer}>
          Your notifications
        </button>
        {this.props.displayDrawer && (
          <div className="Notifications-menu">
            <p>Here are your notifications</p>
            <button onClick={this.props.handleHideDrawer}>Close</button>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {}
};

export default Notifications;
