# Övningsprojekt för träningsprojekt

Ursprung: webpack/react-starter
https://github.com/webpack/react-starter

## Teknikstack

* Kompilering/modulhantering med webpack
* React & jsx
* react-router
* CSS, LESS, SASS, Stylus
* Embedded resources like images or fonts use DataUrls if appropriate
* A simple flag loads a react component (and dependencies) on demand.
* Development
  * Development server
  * Optionally Hot Module Replacement development server (LiveReload for Stylesheets and React components enabled)
  * Uses SourceUrl for performance, but you may switch to SourceMaps easily
* Production
  * Server example for prerendering for React components
  * Initial data inlined in page
  * Long Term Caching through file hashes enabled
  * Generate separate css file to avoid FOUC
  * Minimized CSS and javascript
* Also supports coffee-script files if you are more a coffee-script person.
* You can also require markdown or text files for your content.

## Local Installation

Install [node.js](https://nodejs.org) or [io.js](https://iojs.org)

``` text
npm install
```

## Development server

``` text
# start the webpack-dev-server
npm run dev-server
# vänta tills kompilering är klar

# öppna sedan en annan terminal
npm run start-dev

# öppna url
http://localhost:8080/
```

Konfiguration `webpack-dev-server.config.js`, med automatisk om-kompilering och refresh,
a la [webpack-dev-server documentation](http://webpack.github.io/docs/webpack-dev-server.html).


## Hot Module Replacement development server

``` text
# start the webpack-dev-server in HMR mode
npm run hot-dev-server
# wait for the first compilation is successful

# in another terminal/console
# start the node.js server in development mode
npm run start-dev

# open this url in your browser
http://localhost:8080/
```

The configuration is `webpack-hot-dev-server.config.js`.

It automatically recompiles when files are changed. When a hot-replacement-enabled file is changed (i. e. stylesheets or React components) the module is hot-replaced. If Hot Replacement is not possible the page is refreshed.

Hot Module Replacement has a performance impact on compilation.


## Production compilation and server

``` text
# build the client bundle and the prerendering bundle
npm run build

# start the node.js server in production mode
npm run start

# open this url in your browser
http://localhost:80/
```

The configuration is `webpack-production.config.js`.

The server is at `lib/server.js`

The production setting builds two configurations: one for the client (`build/public`) and one for the serverside prerendering (`build/prerender`).


## Legacy static assets

Assets in `public` are also served.


## Build visualization

After a production build you may want to visualize your modules and chunks tree.

Use the [analyse tool](http://webpack.github.io/analyse/) with the file at `build/stats.json`.


## Loaders and file types

Many file types are preconfigured, but not every loader is installed. If you get an error like `Cannot find module "xxx-loader"`, you'll need to install the loader with `npm install xxx-loader --save` and restart the compilation.


## Common changes to the configuration

### Add more entry points

(for a multi page app)

1. Add an entry point to `make-webpack-config.js` (`var entry`).
2. Add a new top-level react component in `app` (`xxxRoutes.js`, `xxxStoreDescriptions.js`, `xxxStores.js`).
3. (Optional) Enable `commonsChunk` in `webpack-production.config.js` and add `<script src="COMMONS_URL"></script>` to `app/prerender.html`.
4. Modify the server code to require, serve and prerender the other entry point.
5. Restart compilation.

## License

Baserad på https://github.com/webpack/react-starter

Copyright (c) 2015 Consid

MIT (http://www.opensource.org/licenses/mit-license.php)
