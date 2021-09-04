//Next, React (core node_modules) imports must be placed here
import { useState, useEffect, Fragment } from "react";

//Styles must be imported here
import styles from "./TimeLog.module.scss";

const getCountdown = () => {
  const dateNow = new Date();
  const departureDate = new Date();

  departureDate.setHours(18);
  departureDate.setMinutes(0);
  departureDate.setSeconds(0);

  const remainingTime = departureDate - dateNow;

  const normalizeDate = (n) => {
    return n < 10 ? `0${n}` : `${n}`;
  };

  const hours = normalizeDate(
    Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = normalizeDate(
    Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = normalizeDate(
    Math.floor((remainingTime % (1000 * 60)) / 1000)
  );

  let result = hours >= 0 ? `${hours}:${minutes}:${seconds}` : false;

  return result;
};

const TimeLog = (props) => {
  const [countdown, setCountdown] = useState(getCountdown);
  useEffect(() => {
    let countdownInterval = setInterval(() => {
      if (getCountdown() === false) {
        clearInterval(countdownInterval);
      }

      setCountdown(getCountdown());
    }, 1000);
    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <span className={styles.container}>
      {countdown && (
        <Fragment>
          Ажил дуусахад <span>{countdown}</span> үлдлээ
        </Fragment>
      )}
      {!countdown && (
        <Fragment>
          Ажлын цаг <span>дууссан</span>
        </Fragment>
      )}
    </span>
  );
};

export default TimeLog;
