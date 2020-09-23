import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import * as serviceWorker from './serviceWorker';

import {FirebaseAppProvider} from "reactfire"
import Loading from "./Components/Loading"

const firebaseConfig = {
  apiKey: "AIzaSyB9dqbocPuFMkV_T7H1jzpC2RYAeQmV4mw",
  authDomain: "networked-events.firebaseapp.com",
  databaseURL: "https://networked-events.firebaseio.com",
  projectId: "networked-events",
  storageBucket: "networked-events.appspot.com",
  messagingSenderId: "1080792888854",
  appId: "1:1080792888854:web:96532f1ec203e336c8e737"
};


ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <Suspense fallback="Loading...">
          <App />
        </Suspense>
      </BrowserRouter>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
