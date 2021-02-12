import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import Home from './components/Home';
import Exhibit from './components/Exhibit';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/exhibit/:id" component={Exhibit} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
