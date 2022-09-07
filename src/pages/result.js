import React, { useEffect, useState } from "react";
import logo from "../images/logo2.png";
import itemImg1 from "../images/item1.jpg";
import itemImg2 from "../images/item2.png";
import itemImg3 from "../images/item3.png";
import "./result.css";

const Result = () => {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([itemImg1, itemImg2, itemImg3]);
  useEffect(() => {
    console.dir(JSON.parse(localStorage.getItem("points")));
    setData(JSON.parse(localStorage.getItem("points")));
  }, []);
  return (
    <>
      <header className="header header2">
        <div className="container">
          <div className="header-content">
            <img className="header-logo" src={logo} alt="logo" />
            <p className="header-title2">Your Digital Strategy Delivered</p>
          </div>
        </div>
      </header>
      <section className="result">
        <div className="container">
          <div className="result-block">
            <div className="result-head">
              <h1 className="result-title">Your digital priorities are: </h1>
              <div className="result-thoomb"></div>
            </div>
            <div className="result-content">
              <ul className="result-list">
                {data.map((num, index) => (
                  <li className="result-item">
                    <h2 className="result-item-head">{num.name}</h2>
                    <img
                      className="result-item-img"
                      src={images[index]}
                      alt="img"
                    />
                    <a className="result-item-link" href="s">
                      Learn more
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-block">
            <ul className="footer-list">
              <li className="footer-item">
                <a className="footer-item-link" href="#">
                  Inspection Workflow Platform
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-item-link" href="#">
                  Carbonated recycled CDW
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-item-link" href="#">
                  Value add upselling
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-item-link" href="#">
                  Statistical demand forecasting
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li className="footer-item">
                <a className="footer-item-link" href="#">
                  Employee engagement
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-item-link" href="#">
                  Integrated hauling platform
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-item-link" href="#">
                  Cement quality prediction
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-item-link" href="#">
                  Wait-time bot
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li className="footer-item">
                <a className="footer-item-link" href="#">
                  Field level risk assessment
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-item-link" href="#">
                  Jobsite management
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-item-link" href="#">
                  Automated inventory mgmt
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-item-link" href="#">
                  Logistics eProcurement
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li className="footer-item">
                <a className="footer-item-link" href="#">
                  Factorization of concrete
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-item-link" href="#">
                  Affordable housing platform
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Result;
