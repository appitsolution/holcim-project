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
                    href="https://drive.google.com/file/d/16I1vpHFiynBuYBbo2kb1ZpEDCzmZuuy6/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Inspection Workflow Platform
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://drive.google.com/file/d/1KdRJdGDntgWvgzEMLve9OzRpbMriMSXN/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Carbonated recycled CDW
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://drive.google.com/file/d/1Uk212jwC8IooH1NBbT-d4A4WlZzSx-Og/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Value add upselling
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://drive.google.com/file/d/1YSrrNQgjyJ9_GNIUBAzmFm-QyUsV4qR_/view?usp=sharing"
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
                    href="https://drive.google.com/file/d/10UFrvKfOSbTbl_LN8ZcG8DLZUQrn_-GG/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Employee engagement
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://drive.google.com/file/d/1WcNafFe4j9c6vRO40ZbtKJxO4m8EcsWo/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Integrated hauling platform
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://drive.google.com/file/d/1w695u_iBVdBtvOg2entB5FDIpWIt8Ss-/view?usp=sharing"
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
                    href="https://drive.google.com/file/d/14HM8yDyvZ-qreRUu03b6KaKoiX5MVvdJ/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Field level risk assessment
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://drive.google.com/file/d/1mpYaWvlFm3h2Lmee2Tv4Bnl0nkisRLfZ/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Jobsite management
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://drive.google.com/file/d/1im_8NiupqYKdQGy3uBFVbso_1C6Tuvhq/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Automated inventory mgmt
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://drive.google.com/file/d/18L2gXchRb3ffdy1UeLCYJ4R7bmkPEY1e/view?usp=sharing"
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
                    href="https://drive.google.com/file/d/10-cT804qdmWTPdJEK2ETEOZnZxm4UJVK/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Factorization of concrete
                  </a>
                </li>
                <li className="footer-item">
                  <a
                    className="footer-item-link"
                    href="https://drive.google.com/file/d/1WOUx4Mrmyoin6zeNQjV5aDPRCSzOpyWS/view?usp=sharing"
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
