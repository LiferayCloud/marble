# [marblecss.com](http://marblecss.com) [![Built with Electric](https://img.shields.io/badge/built%20with-electric-f3c302.svg?style=flat)](http://electricjs.com)

> Contains the [marblecss.com](http://marblecss.com) static documentation page.

## Setup

1. Make sure you have [node and npm](https://nodejs.org/en/download/) installed:

```sh
node -v && npm -v
```

2. Install our global dependencies:

```sh
[sudo] npm i -g electric-cli
```

3. Install our local dependencies:

```sh
npm i
```

## Usage

### build

* Builds the site and places file in dist directory.

```
electric build
```

### server

* Starts up a local development server.

```
electric server
```

### watch

* Watches for changes and triggers build.

```
electric watch
```

### run

* Runs the `build`, `watch`, and `server` commands for quick development.

```
electric run
```

### deploy

* Deploy to production (send build files to wedeploy branch):

```
electric deploy
```

## License

[BSD License](https://github.com/wedeploy/wedeploy.com/blob/master/LICENSE.md) © Liferay, Inc.
