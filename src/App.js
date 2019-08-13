import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import ImportEdi from './screens/import/ImportEdiFile';
import Main from './screens/Main';
import MainLayout from './layouts/Main';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { UiProvider } from './context/UIcontext';

class App extends Component {
  render() {
    return (
      <Router>
        <UiProvider>
          <div className="App">
            <MainLayout
              mainComponent={
                <Switch>
                  <Route exact path="/" component={Main} label="home" />
                  <Route path="/import" component={ImportEdi} label="import" />
                  <Route render={() => <h1>404 Error</h1>} />
                </Switch>
              }
              headerComponent={<Header />}
              sidebarComponent={<Sidebar />}
            />
          </div>
        </UiProvider>
      </Router>
    );
  }
}

export default App;
