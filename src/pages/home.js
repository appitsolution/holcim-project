import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./home.css";
import logo from "../images/Logo_Holcim.png";
import contentImg from "../images/content-image.jpg";
import contentMob from "../images/content-mobile.jpg";
import img1 from "../images/parsable.png";
import img2 from "../images/Image_Neustark.png";
import img3 from "../images/upsell.png";
import img4 from "../images/Image_SDF.png";
import img5 from "../images/Image_Leena.png";
import img6 from "../images/haulhub.jpg";
import img7 from "../images/cemq.jpg";
import img8 from "../images/Image_WaitTimeBot.png";
import img9 from "../images/Image_FLRA.png";
import img10 from "../images/Image_Struxhub.png";
import img11 from "../images/Image_Nanolike.png";
import img12 from "../images/Image_Shipsta.png";
import img13 from "../images/Image_iBuild.png";
import img14 from "../images/Image_Hive.png";
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
        name: "Inspection workflow platform",
        check: [1, 3, 3, 8, 1, 5, 1],
        link: "https://drive.google.com/file/d/16I1vpHFiynBuYBbo2kb1ZpEDCzmZuuy6/view?usp=sharing",
        url: img1,
      },
      {
        name: "Carbonated recycled CDW",
        check: [5, 3, 2, 10, 5, 2, 3],
        link: "https://drive.google.com/file/d/1KdRJdGDntgWvgzEMLve9OzRpbMriMSXN/view?usp=sharing",
        url: img2,
      },
      {
        name: "Value add upselling",
        check: [10, 1, 1, 4, 4, 3, 1],
        link: "https://drive.google.com/file/d/1Uk212jwC8IooH1NBbT-d4A4WlZzSx-Og/view?usp=sharing",
        url: img3,
      },
      {
        name: "SDF",
        check: [3, 10, 3, 4, 2, 4, 1],
        link: "https://drive.google.com/file/d/1YSrrNQgjyJ9_GNIUBAzmFm-QyUsV4qR_/view?usp=sharing",
        url: img4,
      },
      {
        name: "Employee engagement",
        check: [1, 2, 3, 2, 2, 10, 1],
        link: "https://drive.google.com/file/d/10UFrvKfOSbTbl_LN8ZcG8DLZUQrn_-GG/view?usp=sharing",
        url: img5,
      },
      {
        name: "Integrated hauling platform",
        check: [3, 8, 2, 4, 2, 2, 3],
        link: "https://drive.google.com/file/d/1WcNafFe4j9c6vRO40ZbtKJxO4m8EcsWo/view?usp=sharing",
        url: img6,
      },
      {
        name: "Cement quality prediction",
        check: [2, 5, 2, 7, 2, 3, 1],
        link: "https://drive.google.com/file/d/1w695u_iBVdBtvOg2entB5FDIpWIt8Ss-/view?usp=sharing",
        url: img7,
      },
      {
        name: "Wait Time Bot",
        check: [4, 4, 3, 3, 10, 4, 1],
        link: "https://drive.google.com/file/d/1JyneEUrk_10JNjIbSFpssEPEJA9cgrTi/view?usp=sharing",
        url: img8,
      },
      {
        name: "FLRA",
        check: [2, 3, 10, 3, 7, 3, 1],
        link: "https://drive.google.com/file/d/14HM8yDyvZ-qreRUu03b6KaKoiX5MVvdJ/view?usp=sharing",
        url: img9,
      },
      {
        name: "Job site management",
        check: [2, 1, 4, 3, 6, 2, 10],
        link: "https://drive.google.com/file/d/1mpYaWvlFm3h2Lmee2Tv4Bnl0nkisRLfZ/view?usp=sharing",
        url: img10,
      },
      {
        name: "Automated inventory management",
        check: [2, 8, 6, 1, 6, 3, 1],
        link: "ttps://drive.google.com/file/d/1im_8NiupqYKdQGy3uBFVbso_1C6Tuvhq/view?usp=sharing",
        url: img11,
      },
      {
        name: "Logistics eProcurement platform",
        check: [1, 10, 1, 4, 1, 3, 1],
        link: "https://drive.google.com/file/d/18L2gXchRb3ffdy1UeLCYJ4R7bmkPEY1e/view?usp=sharing",
        url: img12,
      },
      {
        name: "Factorization of concrete",
        check: [3, 3, 1, 3, 8, 2, 4],
        link: "https://drive.google.com/file/d/10-cT804qdmWTPdJEK2ETEOZnZxm4UJVK/view?usp=sharing",
        url: img13,
      },
      {
        name: "Affordable housing e-commerce platform",
        check: [6, 1, 1, 2, 8, 2, 3],
        link: "https://drive.google.com/file/d/1WOUx4Mrmyoin6zeNQjV5aDPRCSzOpyWS/view?usp=sharing",
        url: img14,
      },
    ];
    const check = [];
    mass.forEach((item) => {
      let result = 0;
      item.check.forEach((num, index) => {
        result += num * state[index].value;
      });
      check.push({
        name: item.name,
        result: result,
        link: item.link,
        url: item.url,
      });
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
      <h1 className="error">Please rotate the screen</h1>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="header-logo-link">
              <img className="header-logo" src={logo} alt="logo" />
            </Link>
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
