import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import logo from "../images/Logo_Holcim.png";
import contentImg from "../images/content-image.jpg";
import contentMob from "../images/content-mobile.jpg";
const Home = () => {
  const [intp1, setInpt1] = useState({
    name: "Revenue Up",
    value: 1,
  });
  const [intp2, setInpt2] = useState({
    name: "Cost Down",
    value: 1,
  });
  const [intp3, setInpt3] = useState({
    name: "Safety",
    value: 1,
  });
  const [intp4, setInpt4] = useState({
    name: "Sustainability",
    value: 1,
  });
  const [intp5, setInpt5] = useState({
    name: "Customer Experience",
    value: 1,
  });

  const [intp6, setInpt6] = useState({
    name: "Employee Experience",
    value: 1,
  });
  const [intp7, setInpt7] = useState({
    name: "New Customer Groups",
    value: 1,
  });
  const [state, setState] = useState([
    intp1,
    intp2,
    intp3,
    intp4,
    intp5,
    intp6,
    intp7,
  ]);
  const navigate = useNavigate();

  const readInput = ({ target }) => {
    switch (target.name) {
      case intp1.name:
        setInpt1({ name: intp1.name, value: target.value });
        setState([
          { name: intp1.name, value: target.value },
          intp2,
          intp3,
          intp4,
          intp5,
          intp6,
          intp7,
        ]);
        break;
      case intp2.name:
        setInpt2({ name: intp2.name, value: target.value });
        setState([
          intp1,
          { name: intp2.name, value: target.value },
          intp3,
          intp4,
          intp5,
          intp6,
          intp7,
        ]);
        break;
      case intp3.name:
        setInpt3({ name: intp3.name, value: target.value });
        setState([
          intp1,
          intp2,
          { name: intp3.name, value: target.value },
          intp4,
          intp5,
          intp6,
          intp7,
        ]);
        break;
      case intp4.name:
        setInpt4({ name: intp4.name, value: target.value });
        setState([
          intp1,
          intp2,
          intp3,
          { name: intp4.name, value: target.value },
          intp5,
          intp6,
          intp7,
        ]);
        break;
      case intp5.name:
        setInpt5({ name: intp5.name, value: target.value });
        setState([
          intp1,
          intp2,
          intp3,
          intp4,
          { name: intp5.name, value: target.value },
          intp6,
          intp7,
        ]);
        break;
      case intp6.name:
        setInpt6({ name: intp6.name, value: target.value });
        setState([
          intp1,
          intp2,
          intp3,
          intp4,
          intp5,
          { name: intp6.name, value: target.value },
          intp7,
        ]);
        break;
      case intp7.name:
        setInpt7({ name: intp7.name, value: target.value });
        setState([
          intp1,
          intp2,
          intp3,
          intp4,
          intp5,
          intp6,
          { name: intp7.name, value: target.value },
        ]);
        break;
      default:
        break;
    }
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
        <div className="header-content-mobile">
          <div className="header-content-mobile-logo">
            <img
              className="header-content-mobile-logo-img"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="header-content-mobile-image">
            <img
              className="header-content-mobile-img"
              src={contentMob}
              alt="content-img"
            />
          </div>
          <div className="header-content-mobile-text">
            <p className="header-content-mobile-desc">Digital Impact Now!</p>
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
                  <li className="content-logic-item">
                    <p className="content-logic-text">{intp1.name}</p>
                    <input
                      className="content-logic-input"
                      type="range"
                      value={intp1.value}
                      min="1"
                      max="5"
                      step="1"
                      name={intp1.name}
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
                  <li className="content-logic-item">
                    <p className="content-logic-text">{intp5.name}</p>
                    <input
                      className="content-logic-input"
                      type="range"
                      value={intp5.value}
                      min="1"
                      max="5"
                      step="1"
                      name={intp5.name}
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
                  <li className="content-logic-item">
                    <p className="content-logic-text">{intp2.name}</p>
                    <input
                      className="content-logic-input"
                      type="range"
                      value={intp2.value}
                      min="1"
                      max="5"
                      step="1"
                      name={intp2.name}
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
                  <li className="content-logic-item">
                    <p className="content-logic-text">{intp6.name}</p>
                    <input
                      className="content-logic-input"
                      type="range"
                      value={intp6.value}
                      min="1"
                      max="5"
                      step="1"
                      name={intp6.name}
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
                  <li className="content-logic-item">
                    <p className="content-logic-text">{intp3.name}</p>
                    <input
                      className="content-logic-input"
                      type="range"
                      value={intp3.value}
                      min="1"
                      max="5"
                      step="1"
                      name={intp3.name}
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
                  <li className="content-logic-item">
                    <p className="content-logic-text">{intp7.name}</p>
                    <input
                      className="content-logic-input"
                      type="range"
                      value={intp7.value}
                      min="1"
                      max="5"
                      step="1"
                      name={intp7.name}
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
                  <li className="content-logic-item">
                    <p className="content-logic-text">{intp4.name}</p>
                    <input
                      className="content-logic-input"
                      type="range"
                      value={intp4.value}
                      min="1"
                      max="5"
                      step="1"
                      name={intp4.name}
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
