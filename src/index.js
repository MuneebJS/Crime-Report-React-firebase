import React from 'react';
import ReactDOM from 'react-dom';
// import { App }from './App';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import * as firebase from 'firebase'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import Routes from './Routes.js'





  var config = {
    apiKey: "AIzaSyBwHrtA3ER0d4V9JoIw3oBbwaYs2NiGMhg",
    authDomain: "project-level-1.firebaseapp.com",
    databaseURL: "https://project-level-1.firebaseio.com",
    storageBucket: "project-level-1.appspot.com",
    messagingSenderId: "835802635181"
  };
  firebase.initializeApp(config);




ReactDOM.render(
  <div className="container" >
  <Routes />
  </div>,
  document.getElementById('root')
);

