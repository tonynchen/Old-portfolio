import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

class About extends Component {
  render() {
    if (this.props.data) {
      // var name = this.props.data.name;
      var profilepic = 'images/' + this.props.data.image;
      // var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      // var resumeDownload = this.props.data.resumedownload;
    }

    var downloadClicked = () => {
      window.open('https://drive.google.com/file/d/14Nupb9SvA5LyGL-Xim8aMUYpDO2EsH5_/view?usp=sharing', '_blank');
    };

    return (
      <section id='about'>
        <div className='row'>
          <div className='two columns'>
            <img className='profile-pic' src={profilepic} alt='Tim Baker Profile Pic' />
          </div>
          <div className='ten columns main-col'>
            <h2>About Me</h2>
            <p>
              I'm currently a full time student at Purdue University studying Computer Science with a concentration in Software Engineering. I
              specialize in front-end, mobile and iOS development and would love to work for a Formula 1 team or a car manufacturer one day. My
              passion for CS comes from it's versatility and because it provides the opportunity to create platforms to help others and make an impact
              on the world. I also enjoy the problem solving aspect of programming and the ability to express your creativity.
            </p>
            <div style={{ color: '#ddd', lineHeight: '30px' }}>
              Fun facts about me:
              <ul>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;In my down time, I like to organize hackathons, play Cities: Skylines, Apex Legends
                  and make tiramisu!
                </li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;I've passed the written exam for a private pilot license.</li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;Skydiving and participating in professional karting are at the top of my bucket
                  list.
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;My summer of 2019, I visited the White House and toured the press conference room!
                </li>

                <li>&nbsp;&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;My newest hobby is going to Topgolf!</li>
              </ul>
            </div>
            <br />
            <Grid container justify='center' alignItems='center' style={{ marginTop: '1rem' }}>
              <Grid item xs={12} sm={8}>
                <table className='columns'>
                  <tbody>
                    <tr>
                      <th colSpan='3'>
                        <div style={{ float: 'left' }}>
                          <h2>Contact Details</h2>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <td className='white'>
                        <FontAwesomeIcon icon='user' />
                      </td>
                      <td>&nbsp;&nbsp;</td>
                      <td>Nuo (Tony) Chen</td>
                    </tr>
                    <tr>
                      <td>
                        <FontAwesomeIcon icon='envelope' />
                      </td>
                      <td>&nbsp;&nbsp;</td>
                      <td>{email}</td>
                    </tr>
                    <tr>
                      <td>
                        <FontAwesomeIcon icon='phone-square' />
                      </td>
                      <td>&nbsp;&nbsp;</td>
                      <td>{phone}</td>
                    </tr>
                    <tr>
                      <td>
                        <FontAwesomeIcon icon='address-card' />
                      </td>
                      <td>&nbsp;&nbsp;</td>
                      <td>
                        {street}
                        <br />
                        {city}, {state}, {zip}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Grid>
              <Hidden smUp>
                <div style={{ marginTop: '0.1rem' }}>&nbsp;</div>
              </Hidden>
              <Grid item xs={12} sm={4}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <button className='send' onClick={downloadClicked}>
                    Download Resume
                  </button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
