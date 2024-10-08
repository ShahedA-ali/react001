import React, { useState, useEffect } from 'react';


const Timer = ({startTimer, reset}) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
      let timer;
      if (startTimer) {
        reset()
        timer = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
      }
      return () => clearInterval(timer);
    }, [startTimer]);

    reset = () => {
          setTime(0);
        };
  
    return (
      <div>
        {startTimer ? `${time}s` : `${time}s taken`}
      </div>
    );
  };

// const Timer = ({activate, reset}) => {
//   const [seconds, setSeconds] = useState(0);
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     let interval = null;
//     if (isActive) {
//       interval = setInterval(() => {
//         setSeconds(seconds => seconds + 1);
//       }, 1000);
//     } else if (!isActive && seconds !== 0) {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isActive, seconds]);

//   activate = (boolValue) => {
//     console.log('activate')
//     setIsActive(boolValue);
//   };

//   reset = () => {
//     setSeconds(0);
//     setIsActive(false);
//   };

//   return (
//     <>
//       <div className="time">
//         {seconds}s
//       </div>
//       {/* <div className="row">
//         <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
//           {isActive ? 'Pause' : 'Start'}
//         </button>
//         <button className="button" onClick={reset}>
//           Reset
//         </button>
//       </div> */}
//     </>
//   );
// };

export default Timer;
