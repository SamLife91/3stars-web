import React, { Component } from 'react'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

import ImportEdi from './screens/import/ImportEdiFile'
import Main from './screens/Main'
import MainLayout from './layouts/Main'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

class App extends Component {
  render() {
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
  }
}

export default App
