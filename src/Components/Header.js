import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typing from 'react-typing-animation';

class Header extends Component {
  render() {
    if (this.props.data) {
      // var name = this.props.data.name;
      // var occupation = this.props.data.occupation;
      // var description = this.props.data.description;
      // var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <FontAwesomeIcon icon={[network.className.split(' ')[0], network.className.split(' ')[1]]} />
            </a>
          </li>
        );
      });
    }

    function Description() {
      var arr = ['Software Engineer', 'Researcher', 'Gamer'];
      arr = arr.sort(() => Math.random() - 0.5)
      return (
        <Typing loop speed={50}>
          <h3>
            {arr.map((item) => (
              <>
                {item}
                <Typing.Speed ms={35} />
                <Typing.Backspace count={18} delay={2000} />
                <Typing.Speed ms={50} />
              </>
            ))}
          </h3>
        </Typing>
      );
    }

    return (
      <header id='home'>
        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>

          <ul id='nav' className='nav'>
            <li className='current'>
              <a className='smoothscroll' href='#home'>
                Home
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#about'>
                About
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#resume'>
                Resume
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#portfolio'>
                Projects
              </a>
            </li>
            {/* <li>
              <a className='smoothscroll' href='#testimonials'>
                Testimonials
              </a>
            </li> */}
            <li>
              <a className='smoothscroll' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline'>Hi, I'm Tony!</h1>
            <Description></Description>

            {/* <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3> */}

            <hr />
            <ul className='social'>{networks}</ul>
          </div>
        </div>

        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle'></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
