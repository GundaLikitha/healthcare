import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/back.png' alt='image crashed'/>
      <h1>HEALTHCARE AND WELLBEING</h1>
      <p>Your Health Our Priority</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;