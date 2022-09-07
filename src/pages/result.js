import React, { useEffect } from "react";
import logo from "../images/logo2.png";
import itemImg from "../images/item1.jpg";
import itemImg2 from "../images/item2.png";
import itemImg3 from "../images/item3.png";
import "./result.css";

const Result = () => {
  useEffect(() => {
    console.dir(JSON.parse(localStorage.getItem("points")));
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
                <li className="result-item">
                  <h2 className="result-item-head">Value add upselling</h2>
                  <img className="result-item-img" src={itemImg} alt="img" />
                  <a className="result-item-link" href="s">
                    Learn more
                  </a>
                </li>
                <li className="result-item">
                  <h2 className="result-item-head">Value add upselling</h2>
                  <img className="result-item-img" src={itemImg2} alt="img" />
                  <a className="result-item-link" href="s">
                    Learn more
                  </a>
                </li>
                <li className="result-item">
                  <h2 className="result-item-head">Value add upselling</h2>
                  <img className="result-item-img" src={itemImg3} alt="img" />
                  <a className="result-item-link" href="s">
                    Learn more
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-block">
            <ul className="footer-list">
              <li className="footer-item">Inspection Workflow Platform</li>
              <li className="footer-item">Carbonated recycled CDW</li>
              <li className="footer-item">Value add upselling</li>
              <li className="footer-item">Statistical demand forecasting</li>
            </ul>
            <ul className="footer-list">
              <li className="footer-item">Employee engagement</li>
              <li className="footer-item">Integrated hauling platform</li>
              <li className="footer-item">Cement quality prediction</li>
              <li className="footer-item">Wait-time bot</li>
            </ul>
            <ul className="footer-list">
              <li className="footer-item">Field level risk assessment</li>
              <li className="footer-item">Jobsite management</li>
              <li className="footer-item">Automated inventory mgmt</li>
              <li className="footer-item">Logistics eProcurement</li>
            </ul>
            <ul className="footer-list">
              <li className="footer-item">Factorization of concrete</li>
              <li className="footer-item">Affordable housing platform</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Result;
