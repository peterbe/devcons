import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom';

class App extends React.Component {
  // componentDidMount() {
  //   console.log(this.props.location);
  // }
  render() {
    const prefix = this.props.match.url;
    return (
      <div>
        <Route path={prefix} exact component={Home} />
        <Route path={`${prefix}/about`} component={About} />
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
        <h1>Welcome To Normandy</h1>
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
