import React from 'react';
import { AppContext, defaultUser, defaultLogOut } from './AppContext';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      logOut: defaultLogOut
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
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

  render() {
    return (
      <div className="App">
        <AppContext.Provider value={{ user: this.state.user, logOut: this.logOut }}>
          {this.state.user.isLoggedIn ? <CourseList /> : <Login logIn={this.logIn} />}
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
