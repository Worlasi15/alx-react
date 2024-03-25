import React from 'react';
import { AppContext, defaultUser, defaultLogOut } from './AppContext';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      logOut: defaultLogOut,
      listNotifications: []
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    });
  }

  logOut() {
    this.setState({
      user: defaultUser
    });
  }

  markNotificationAsRead(id) {
    this.setState(prevState => ({
      listNotifications: prevState.listNotifications.filter(notification => notification.id !== id)
    }));
  }

  render() {
    return (
      <div className="App">
        <AppContext.Provider value={{ user: this.state.user, logOut: this.logOut }}>
          {this.state.user.isLoggedIn ? (
            <React.Fragment>
              <Notifications listNotifications={this.state.listNotifications} markNotificationAsRead={this.markNotificationAsRead} />
              <CourseList />
            </React.Fragment>
          ) : (
            <Login logIn={this.logIn} />
          )}
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
