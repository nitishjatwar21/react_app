import React, { Component } from 'react';
import './App.css';

class sidebar extends Component {

    render() {
        return(
            <div className="sidenav">
              <a href="/react_app/#/dashboard/">Dashboard</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">client</a>
              <a href="#">Contact</a>
            </div>);
        
    }
}

export default sidebar;