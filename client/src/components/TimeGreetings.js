import React, { useEffect, useState } from 'react'

const TimeGreetings = () => {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const date = new Date();
        const hours = date.getHours();
        let greetingMessage;
    
        if (hours < 12) {
          greetingMessage = 'morning!';
        } else if (hours >= 12 && hours < 17) {
          greetingMessage = 'afternoon!';
        } else {
          greetingMessage = 'evening!';
        }
    
        setGreeting(greetingMessage);
      }, []);

  return (
    <div>{greeting}</div>
  )
}

export default TimeGreetings