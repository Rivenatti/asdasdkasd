import React, { Component } from "react";
import "./Navbar.scss";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  

  render() {

    const toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }

    return (
        <>
      <nav>
        <h1>GitBook</h1>
        <div onClick={toggleMenu} class={this.state.isOpen ? "nav__mobile change" : "nav__mobile"}>
          <div class="bar1" />
          <div class="bar2" />
          <div class="bar3" />
        </div>

        
        <ul>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#docs">Docs</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li />
          <li>
            <a href="#sign-in">Sign in</a>
          </li>
          <li>
            <a href="#sign-up" className="nav__sign-up">
              Sign up
            </a>
          </li>
        </ul>
      </nav>
      
      
      {this.state.isOpen && 
        <div className="nav__side">
            <ul>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#docs">Docs</a></li>
                <li><a href="#Blog">Blog</a></li>
            </ul>
        </div>}
      </>
    );
  }
}

export default Navbar;
