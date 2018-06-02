import React, {Component} from 'react';

class Header extends Component {
  render(){
    return(
      <header>
      <div class="wrapper">
        <nav>
          <div class="logo">LOGO</div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </nav>
        <section class="sec1"></section>

      </div>
      </header>
    );
  }
}

export default Header;
