import React from 'react'
import TimeGreetings from './TimeGreetings'

function Welcome() {
  return (
    <div style={{ display: 'grid', 
                  gridTemplateColumns: '1fr 1fr' }}>
      <div className="welcome-left" 
            style={{ display: 'flex',  
                      flexDirection: 'column',
                      lineHeight: 1}}>

        <span style={{color: '#66B2FF', 
                      fontSize: '2.5rem'}}>
                      Good 
        </span>

        <span style={{fontSize: '2.5rem'}}><TimeGreetings /></span>
      </div>

      <div className="welcome-right" 
            style={{ fontSize:'1.5rem', fontWeight: '600',
                      width: '90%', marginTop: '0.9rem' , lineHeight:'1' , color: '#66B2FF'}}>
              Stay Ahead of Water Quality:  <span style={{color: '#ffff', fontWeight:'400'}}>Keep an eye on what matters most with Quality Tracking!</span></div>
      </div>
  )
}

export default Welcome