import React, { Component } from "react";
import DarkTheme, { createTheme } from 'react-dark-theme';
import { Navbar, Nav,} from "react-bootstrap";


export default class index extends Component
{
    state={}
    lightTheme = {
        background: 'white',
        text: 'black',
      }
      darkTheme = {
        background: 'grey',
        text:"grey"
      }
      myTheme = createTheme(this.darkTheme, this.lightTheme);
      render()
      {
          return (
            <div style={{ backgroundColor: this.myTheme.background, color: this.myTheme.text }}>
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="#home">XMeet</Navbar.Brand>
              <Nav className="mr-auto">
    
              </Nav>
              <DarkTheme light={this.lightTheme} dark={this.darkTheme} />
    
            </Navbar>
            </div>
          );
      }
}