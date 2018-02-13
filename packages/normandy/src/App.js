import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom';

import './App.css';

import TodoApp from './components/Todo';

class App extends React.Component {
  // componentDidMount() {
  //   console.log(this.props.location);
  // }
  render() {
    const prefix = this.props.match.url;
    return (
      <div id="normandy">
        <h1>Normandy</h1>
        <hr />
        <Route path={prefix} exact component={Home} />
        <Route path={`${prefix}/about`} component={About} />
        <Route path={`${prefix}/todo`} component={TodoApp} />
        {/* <Route path="/normandy" component={NormandyApp} /> */}
        {/* <Redirect from="/old-match" to="/will-match"/> */}
        {/* <Route path="/normandy" component={NormandyApp} /> */}
      </div>
    );
  }
}

export default App;

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome</h2>
        <p>
          <Link to="/normandy/todo">Normandy's Todo App</Link>
        </p>
        <p>
          <Link to="/normandy/about">Normandy's About page</Link>
        </p>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About The Normandy App</h2>
        <p>Not sure what to say here...</p>
        <p>
          <Link to="/normandy">Back to Normandy homepage</Link>
        </p>
      </div>
    );
  }
}
