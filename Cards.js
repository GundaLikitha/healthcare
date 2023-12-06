import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>EXPLORE OUR WEBSITE!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/patient-card.jpg'
              text='Add Your Health Report'
              path='/records'
            />
            <CardItem
              src='images/health-details.jpg'
              text='Find Your Health Records'
              path='/recorddetails'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Exercise-Balanced-Diet.jpg'
              text='Find Your Suitable Diet and Workouts'
              label='Discover'
              path='/recommendations'
            />
            <CardItem
              src='images/hospital.jpg'
              text='Choose Your Hospital'
              label='Discover'
              path='/hospitalinfo'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;