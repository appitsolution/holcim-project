import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import logo from "../images/Logo_Holcim.png";
import contentImg from "../images/content-image.jpg";
const Home = () => {
  const [state, setState] = useState([
    {
      name: "Revenue Up",
      value: 1,
    },
    {
      name: "Customer Experience",
      value: 1,
    },
    {
      name: "Cost Down",
      value: 1,
    },
    {
      name: "Employee Experience",
      value: 1,
    },
    {
      name: "Safety",
      value: 1,
    },
    {
      name: "New Customer Groups",
      value: 1,
    },
    {
      name: "Sustainability",
      value: 1,
    },
  ]);
  const navigate = useNavigate();

  const readInput = ({ target }) => {
    const result = state.map((num) => {
      if (num.name !== target.name) {
        return num;
      }
      return { name: num.name, value: target.value };
    });
    setState(result);
  };
  const totalResult = () => {
    const mass = [
      {
        name: "Parsable",
        check: [1, 3, 3, 8, 1, 5, 1],
        percent: 0.01,
      },
      {
        name: "Neustark",
        check: [5, 3, 2, 10, 5, 2, 3],
        percent: 0.02,
      },
      {
        name: "Ice Upsell",
        check: [10, 1, 1, 3, 4, 3, 1],
        percent: 0.03,
      },
      {
        name: "SDF",
        check: [3, 10, 3, 4, 2, 4, 1],
        percent: 0.04,
      },
      {
        name: "Leena AI",
        check: [1, 2, 3, 2, 2, 10, 1],
        percent: 0.05,
      },
      {
        name: "Haulhub",
        check: [3, 8, 2, 4, 2, 2, 3],
        percent: 0.06,
      },
      {
        name: "CemQ",
        check: [2, 5, 2, 7, 2, 3, 1],
        percent: 0.07,
      },
      {
        name: "Wait Time Bot",
        check: [4, 4, 3, 3, 10, 4, 1],
        percent: 0.08,
      },
      {
        name: "FLRA",
        check: [2, 3, 10, 3, 7, 3, 1],
        percent: 0.09,
      },
      {
        name: "Struxhub",
        check: [2, 1, 4, 3, 6, 2, 10],
        percent: 0.1,
      },
    ];
    const check = [];
    mass.forEach((item) => {
      let result = 0;
      item.check.forEach((num, index) => {
        result += num * state[index].value;
      });
      check.push({ name: item.name, result: result + item.percent });
    });
    localStorage.setItem(
      "points",
      JSON.stringify(
        check
          .sort(function (a, b) {
            if (a.result > b.result) {
              return 1;
            }
            if (a.result < b.result) {
              return -1;
            }
            return 0;
          })
          .reverse()
          .slice(0, 3)
      )
    );
    navigate("/result");
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <img className="header-logo" src={logo} alt="logo" />
            <p className="header-title">Digital Impact Now!</p>
          </div>
        </div>
      </header>
      <section className="content">
        <div className="container">
          <div className="content-block">
            <div className="content-logic">
              <h1 className="content-logic-title">
                What are your business priorities?
              </h1>
              <form className="content-logic-form">
                <ul className="content-logic-list">
                  {state.map((num, index) => (
                    <li className="content-logic-item" key={index}>
                      <p className="content-logic-text">{num.name}</p>
                      <input
                        className="content-logic-input"
                        type="range"
                        value={num.value}
                        min="1"
                        max="5"
                        step="1"
                        name={num.name}
                        onInput={readInput}
                      />
                      <ul className="content-logic-input-list">
                        <li className="content-logic-input-item">1</li>
                        <li className="content-logic-input-item">2</li>
                        <li className="content-logic-input-item">3</li>
                        <li className="content-logic-input-item">4</li>
                        <li className="content-logic-input-item">5</li>
                      </ul>
                    </li>
                  ))}
                </ul>
                <button className="content-logic-button" onClick={totalResult}>
                  MaQe it happen
                </button>
              </form>
            </div>
            <div className="content-img">
              <img
                className="content-image"
                src={contentImg}
                alt="content-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
