import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

export default function Math() {
  const [weight, setWeight] = useState();
  const [goal, setGoal] = useState();
  const [rate, setRate] = useState();
  const [show, setShow] = useState(false);

  let amountofWeeks = (weight - goal) / rate;
  function Meme() {
    if (weight >= 200) {
      return (
        <div>
          <img
            className="image-width"
            src="https://i.imgflip.com/6vvw7b.jpg"
            alt="meme"
          />
        </div>
      );
    } else if (weight < 100 && weight > 0) {
      return (
        <div>
          <img
            className="image-width"
            src="https://preview.redd.it/kc02ltwwb9211.jpg?auto=webp&s=89c81474bf2a88ef41fcfa64105125bff69deb74"
            alt="meme"
          />
        </div>
      );
    } else if (weight >= 100 && weight < 200) {
      return (
        <div>
          <img
            className="image-width"
            src="https://i.ytimg.com/vi/7RHSmGPBCPw/hq2.jpg?sqp=-oaymwEoCOADEOgC8quKqQMcGADwAQH4AeYCgALgA4oCDAgAEAEYZSBYKFYwDw==&rs=AOn4CLBvYrOeQZSoNFEUW69hQOB4w3irzw"
            alt="meme"
          />
        </div>
      );
    }
  }

  return (
    <>
      <div className="App-header">
        <div className="box-1">
          <div className="pl-20 pt-20">
            {<p className="m-0">Enter your curent weight:</p>}
            <input
              className="mb-20 input"
              type=""
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            ></input>
          </div>
          <div className="pl-20">
            <p className="m-0">Enter your goal weight:</p>
            <input
              className="mb-20 input"
              type=""
              value={goal}
              ue={goal}
              onChange={(e) => setGoal(e.target.value)}
            ></input>
          </div>
          <div className="pl-20">
            <p className="m-0">Pounds lost per week:</p>
            <input
              className="mb-20 input"
              type=""
              value={rate}
              ue={rate}
              onChange={(e) => setRate(e.target.value)}
            ></input>
          </div>
          <div className="pl-20">
            <button className="mb-20 btn" onClick={() => setShow(!show)}>
              Calculate
            </button>
          </div>
          <div>
            {show && <p className="pl-20 pb-10">Curent Weight: {weight}lbs</p>}
            {show && <p className="pl-20 pb-10">Gaol Weight: {goal}lbs</p>}
            {show && (
              <p className="pl-20 pb-10">
                It will take you {amountofWeeks} weeks to reach your goal!
              </p>
            )}
          </div>
        </div>
        <div className="box-2">
          <Meme />
        </div>
      </div>
    </>
  );
}
