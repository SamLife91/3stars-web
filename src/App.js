<<<<<<< HEAD
import React, { Component } from 'react'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
=======
import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { withRouter } from "react-router";
import logo from "./logo.svg";
import "./App.css";
>>>>>>> 25d952ce3a01726fe52db48f9a7283553360afda

import ImportEdi from './screens/import/ImportEdiFile'
import Main from './screens/Main'
import MainLayout from './layouts/Main'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

import { UiProvider } from "./context/UIcontext";

class App extends Component {
  render() {
<<<<<<< HEAD
    const h = Header
    return (
      <div className="App">
        <MainLayout
          mainComponent={
            <Router>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/import" component={ImportEdi} />
              </Switch>
            </Router>
          }
          headerComponent={<Header />}
          sidebarComponent={<Sidebar />}
        />
      </div>
    )
=======
    return (
      <Router>
        <UiProvider>
          <div className="App">
            <MainLayout
              mainComponent={
                <Switch>
                  <Route exact path="/" component={Main} label="home" />
                  <Route
                    path="/import"
                    label="test"
                    component={ImportEdi}
                    label="import"
                  />
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
>>>>>>> 25d952ce3a01726fe52db48f9a7283553360afda
  }
}

export default App
