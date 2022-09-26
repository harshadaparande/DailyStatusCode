import React, { useState, useEffect } from "react";
import "./StopWatch.css";
import { FaStopwatch } from "react-icons/fa";
const Stopwatch = () => {
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [second, setSecond] = useState(0);
  const [msecond, setMsecond] = useState(0);
  const [stop, setStop] = useState(true);

  var date = new Date();
  var current_date =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  function onStart() {
    setStop(false);
  }
  function onStop() {
    setStop(true);
  }

  function onReset() {
    setHours(0);
    setMin(0);
    setSecond(0);
    setMsecond(0);
  }
  useEffect(() => {
    let interval = null;
    if (!stop) {
      interval = setInterval(() => {
        if (min > 59) {
          setHours(hours + 1);
          setMin(0);
          clearInterval(interval);
        }
        if (second > 59) {
          setMin(min + 1);
          setSecond(0);
          clearInterval(interval);
        }
        if (msecond > 999) {
          //1000milisec=1second
          setSecond(second + 1);
          setMsecond(0);
          clearInterval(interval);
        }
        if (msecond <= 999) {
          setMsecond(msecond + 1);
        }
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <>
      <h1 className="text-center mt-5">
        StopW
        <FaStopwatch className="icon" />
        tch{" "}
      </h1>
      <h4 className="text-center text-light">Date:{current_date}</h4>

      <div className="MainDiv mx-auto">
        <div className="sub_div">
          <section>
            <p>{hours}</p>
            <small>HOURS</small>
          </section>
          <span className="mt-4">:</span>
          <section>
            <p>{min}</p>
            <small>MINUTE</small>
          </section>
          <span className="mt-4">:</span>
          <section>
            <p>{second}</p>
            <small>SECOND</small>
          </section>
          <span className="mt-4">:</span>

          <section>
            <p>{msecond}</p>
            <small>MILLISECOND</small>
          </section>
        </div>
        <div className="second_div">
          <button
            className="btn btn-outline-info m-2 w-25 buttons"
            onClick={onStart}
          >
            Start
          </button>
          <button
            className="btn btn-outline-info m-2 w-25 buttons"
            onClick={onStop}
          >
            Stop
          </button>
          <button
            className="btn btn-outline-info m-2 w-25 buttons"
            onClick={onReset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
export default Stopwatch;
