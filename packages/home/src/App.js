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

import { Home, About, SignIn, PageNotFound } from './Components';
// import { PageNotFound } from 'common/src/PageNotFound';
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

// XXX Make this more generic and not hardcoded.
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
