import React from 'react';
import Notifications from '../Notifications/Notifications';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to React</h1>
        </header>
        <main className="App-body">
          <Notifications
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
        </main>
      </div>
    );
  }
}

export default App;
