import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.css';

import { PageNotFound } from 'common/src/PageNotFound';
// import { PageNotFound } from 'common/src/Loading';
// import { App as NormandyApp } from "normandy/src/App";
// import { App as NormandyApp } from 'normandy/src/App';
// console.log("TEST", NormandyApp);

// const LoadableNormandyApp = Loadable({
//   loader: () => import('normandy/src/App'),
//   loading() {
//     return <div>Loading...</div>;
//   }
// });

// Make this more generic and not hardcoded.
const Normandy = Loadable({
  loader: () => import('normandy/src/App'),
  loading() {
    return <div>Loading Normandy...</div>;
  }
});

class App extends React.Component {
  setCameFrom = event => {
    let camefrom = window.location.pathname;
    if (window.location.search) {
      camefrom += window.location.search;
    }
    window.sessionStorage.setItem('camefrom', camefrom);
  };
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link
              to="/signin"
              type="button"
              style={{ float: 'right', color: 'white' }}
              onClick={this.setCameFrom}
            >
              Sign In
            </Link>
            <h1 className="App-title">Delivery Console</h1>
            <ul>
              <li>
                <NavLink to="/">Console Home</NavLink>
              </li>
              <li>
                <NavLink to="/normandy">Normandy</NavLink>
              </li>
            </ul>
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/signin" component={SignIn} />
              {/* <Route
                path="/signin"
                render={props => {
                  console.log("PROPS", props);
                  return <SignIn {...props} />;
                }}
              /> */}
              <Route path="/about" component={About} />
              {/* <Route path="/normandy" component={NormandyApp} /> */}
              {/* <Redirect from="/old-match" to="/will-match"/> */}
              {/* <Route path="/normandy" component={NormandyApp} /> */}
              <Route path="/normandy" component={Normandy} />
              {/* <Route path="/normandy" component={LoadableNormandyApp} /> */}
              {/* <Route
                path="/normandy"
                render={props => {
                  // console.log("PROPS", props.location);
                  return <NormandyApp prefix="/normandy" {...props} />;
                }}
              /> */}
              <Route component={PageNotFound} />
            </Switch>
          </main>
          <footer>
            <p>
              Delivery Console v1 using {React.version} {' - '}
              <Link to="/about">About this App</Link>
            </p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome To The Delivery Console</h2>
        <p>Pick an app in the Menu above</p>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About This App</h2>
        <p>
          The Delivery Console spans multiple React components that might all
          function differently.
        </p>
        <p>
          <Link to="/">Back to Home homepage</Link>
        </p>
      </div>
    );
  }
}

class SignIn extends React.PureComponent {
  fakeSignIn = event => {
    event.preventDefault();
    const camefrom = window.sessionStorage.getItem('camefrom');
    if (window.confirm('Is your name Slim?')) {
      console.log('Sign in');
    }
    // alert("Imagine a Sign In modal right here and now.");
    if (camefrom) {
      alert(`After successful log in, go to: ${camefrom}`);
    }
  };
  render() {
    return (
      <div>
        <h2>Sign In</h2>
        <form onSubmit={this.fakeSignIn}>
          <button type="submit">Click here to Sign In with Auth9</button>
        </form>
      </div>
    );
  }
}
