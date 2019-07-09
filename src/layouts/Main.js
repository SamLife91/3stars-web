import React from 'react'
import logo from '../logo.svg';
// import '~/App.css';


const Main = (props) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <header style={{flex: 1}}>
         {props.headerComponent}
      </header>
      <div className="main" style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{flex: 1, alignSelf: 'flex-start'}}>
            {props.sidebarComponent}
          </div>
          <div style={{display: 'flex', flex: 6, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100vh'}}>
            {props.mainComponent}
          </div>
        </div>
    </div>
  )
}

export default Main