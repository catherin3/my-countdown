import React, { useEffect, useRef, useState } from 'react'
import './App.css';

function App() {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdowndate = new Date('November 9 2020 07:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdowndate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const mintues = Math.floor(distance % ((1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / (1000));

      if (distance < 0) {
        //stop the timer
        clearInterval(interval.current)
      } else {
        //update the timer 
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(mintues)
        setTimerSeconds(seconds)
      }

    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current)
    }
  });

  return (
    <div className="App">
      <section className="timer">
        <section>
          <p>{timerDays}</p>
          <p><small>Days</small></p>
        </section>
        <span style={{paddingTop: 12, fontSize: 30}}>:</span>

        <section>
          <p>{timerHours}</p>
          <p><small>Hours</small></p>
        </section>
        <span style={{paddingTop: 12, fontSize: 30}}>:</span>

        <section>
          <p>{timerMinutes}</p>
          <p><small>Minutes</small></p>
        </section>
        <span style={{paddingTop: 12, fontSize: 30}}>:</span>

        <section>
          <p>{timerSeconds}</p>
          <p><small>Seconds</small></p>
        </section>
      </section>
    </div>
  );
}

export default App;
