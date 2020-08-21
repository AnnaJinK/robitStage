import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import 'core-js/es6/map';
import 'core-js/es6/set';
import "@babel/polyfill";
import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactBreakpoints from 'react-breakpoints';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/configureStore';

const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
};

const store = configureStore();

ReactDOM.render(
  <ReactBreakpoints breakpoints={breakpoints}>
    <App store={store} />
  </ReactBreakpoints>,
  document.getElementById('root')
);

serviceWorker.unregister();
