import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo2.png";
import "./result.css";

const Result = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("points"));
    const total = res.map((num) => {
      if (num.name === "SDF") {
        return {
          name: "Statistical demand forecasting",
          result: num.result,
          link: num.link,
          url: num.url,
        };
      } else if (num.name === "FLRA") {
        return {
          name: "Field level risk assessment",
          result: num.result,
          link: num.link,
          url: num.url,
        };
      } else {
        return num;
      }
    });
    setData(total);
  }, []);
  return (
    <>
      <h1 className="error">Please rotate the screen</h1>
      <header className="header2">
        <div className="container">
          <div className="header-content-result">
            <Link to="/">
              <img className="header-logo-result" src={logo} alt="logo" />
            </Link>
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
                  <li className="result-item" key={index}>
                    <h2 className="result-item-head">{num.name}</h2>
                    <img className="result-item-img" src={num.url} alt="img" />
                    <a
                      className="result-item-link"
                      href={num.link}
                      target="_blank"
                      rel="noreferrer"
                    >
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
            <div className="footer-thoomb">
              <ul className="footer-list">
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://holcim.linecore.com.ua/parsable.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Inspection Workflow Platform
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://holcim.linecore.com.ua/neutstark.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Carbonated recycled CDW
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://holcim.linecore.com.ua/iceupsell.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Value add upselling
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://holcim.linecore.com.ua/sdf.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Statistical demand forecasting
                  </a>
                </li>
              </ul>
              <ul className="footer-list">
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href=" https://holcim.linecore.com.ua/leena.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Employee engagement
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://holcim.linecore.com.ua/haulhub.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Integrated hauling platform
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://holcim.linecore.com.ua/cemq.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cement quality prediction
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://drive.google.com/file/d/1JyneEUrk_10JNjIbSFpssEPEJA9cgrTi/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Wait-time bot
                  </a>
                </li>
              </ul>
              <ul className="footer-list">
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://holcim.linecore.com.ua/flra.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Field level risk assessment
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://holcim.linecore.com.ua/struxhub.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Jobsite management
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://holcim.linecore.com.ua/nanolike.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Automated inventory mgmt
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://holcim.linecore.com.ua/shipsta.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Logistics eProcurement
                  </a>
                </li>
              </ul>
              <ul className="footer-list">
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://holcim.linecore.com.ua/hive.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Factorization of concrete
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://holcim.linecore.com.ua/ibuild.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Affordable housing platform
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Result;
