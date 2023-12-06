import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Feedback from 'react-bootstrap/esm/Feedback';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the HWS newsletter
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link><br/>
            <a href='https://www.termsofservicegenerator.net/live.php?token=NHyROcaiUVFcXoaLdYtSmPVBpic0wUo9'>Terms of Service</a>
          </div>
          <div class='footer-link-items'>
            <h2>FeedBack</h2>
            <Link to='/feedback'>Let us know</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <i class="fas fa-at" style={{color:'white'}}/>
            <p style={{color:'white'}}>2000031502@kluniversity.in</p><br/>
            <a href='https://www.linkedin.com/in/kundana-sri-bhanu-nallajeru-a03224215'>LinkedIn</a>

          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              HWS
              <i class="fas fa-hospital"/>
            </Link>
          </div>
          <small class='website-rights'>HWS © 2021</small>
          
          </div>
      </section>
      </div>
  );
  }
export default Footer;