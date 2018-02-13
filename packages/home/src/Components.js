import React from 'react';
import { Link } from 'react-router-dom';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome To The Delivery Console</h2>
        <p>Pick an app in the Menu above</p>
      </div>
    );
  }
}

export class About extends React.Component {
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

export class SignIn extends React.PureComponent {
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

export const PageNotFound = ({ location }) => (
  <div>
    <h2>Page Not Found</h2>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);
