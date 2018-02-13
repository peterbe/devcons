# Delivery Console Prototype v0

This is an experimental implementation of
[`create-react-app`](https://github.com/facebookincubator/create-react-app) with
`react-router-dom`, `react-loadable` and `yarn workspaces`.

## To run

For this to work you first need to enable workspaces in `yarn`. Simply run:

```sh
$ yarn config set workspaces-experimental true
```

That should update your `~/.yarnrc`.

```sh
$ git clone https://github.com/peterbe/devcons.git
$ yarn
$ yarn start
$ open http://localhost:3000
```

## To build and serve

Globally install [`serve`](https://www.npmjs.com/package/serve)

```sh
$ yarn serve
$ open http://localhost:5000
```

## To run tests

```sh
$ yarn test
```

Note that `jest` only runs tests based on the files since the last commit.
The interactive test running should mention this and you can press `a` to
run all tests.

## Source map exploration

The whole point of using async loading is to avoid the cost of having to
download a monster .js bundle for the union of all packages in all
different workspaces. To prove that the lazy loaded chunks "self-contain"
the packages only they need. To see this in action, globally install
[`source-map-explorer`](https://www.npmjs.com/package/source-map-explorer).

```sh
$ yarn global add source-map-explorer
$ yarn build
$ ls packages/home/build/static/js
0.0c747db6.chunk.js     0.0c747db6.chunk.js.map main.6d9855f0.js        main.6d9855f0.js.map
$ source-map-explorer packages/home/build/static/js/0.0c747db6.chunk.js
$ source-map-explorer packages/home/build/static/js/main.6d9855f0.js
```

## How it works

The core React app is the `packages/home` one. It's the one that imports
the other components from the other workspace packages.

It uses `react-router-dom` to redirect traffic to components in other
packages and when it does so it uses `react-loadable` which
asynchronously loads them.

### Rational

The goal is that each app is a contained folder containing a bunch of
React components and it's own `package.json` where it can maintain a list
of vendor packages these app components need. This makes for better
organization of files. Each app feels more self-contained even though
it's only imports for the `home` app.

The user experience is ideal in that minimal build JS is downloaded
if the user only uses some few apps, for example, only using the `home`
app (to sign in and as landing page) and the Normandy app. Then xhe
shouldn't have to download all the resources that `someotherapp` requires.

## Caveats

* When working on an app/component that isn't imported you don't get
  those `create-react-app` `eslint` warnings immediately.
  That's because the code you might be working on isn't imported yet.
  Perhaps this can be solved by some hack that depends on
  `process.env.NODE_ENV` so that it imports all files during development.

* Perhaps it's not convenient to load the `home` and have the app you're
  strongly interested in being async loaded. See point above.
  Perhaps it's possible to write a, for example, `packages/normandy/index.js`
  that you can start with `yarn start` specifically in that directory. Then
  it could have a mock of the `home` app's top bar and nav etc.
