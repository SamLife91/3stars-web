import React, { Component } from 'react'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { withRouter } from 'react-router'
import logo from './logo.svg'
import './App.css'

import ImportEdi from './screens/import/ImportEdiFile'
import Main from './screens/Main'
import MainLayout from './layouts/Main'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Login from './components/import/LoginForm'

import { UiProvider } from './context/UIcontext'

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
                  <Route
                    path="/import"
                    label="test"
                    component={ImportEdi}
                    label="import"
                  />
                  <Route path="/login" component={Login} label="login" />
                  <Route render={() => <h1>404 Error</h1>} />
                </Switch>
              }
              headerComponent={<Header />}
              sidebarComponent={<Sidebar />}
            />
          </div>
        </UiProvider>
      </Router>
    )
  }
}

export default App
