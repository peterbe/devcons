# Delivery Console Prototype v0

This is an experimental implementation of `create-react-app` with
`react-router-dom`, `react-loadable` and `yarn workspaces`.

## To run

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
