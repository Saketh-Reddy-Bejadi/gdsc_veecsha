import "./WebDev.css";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import reactJS from "../../assets/reactJS.svg";
import nodeJS from "../../assets/nodejs.svg";
import { useEffect } from "react";
import data from "./data";

export const WebDev = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="WebDev">
      <div className="WebCon1">
        <img className="img1" src={html} alt="" />
        <img className="img2" src={css} alt="" />
        <img className="img3" src={js} alt="" />
        <img className="img4" src={reactJS} alt="" />
        <img className="img5" src={nodeJS} alt="" />

        <p className="webH brnd">Web Development</p>
      </div>
      <div className="webContent">
        <p className="webHead">Getting started</p>
        <p className="webSubhead">
          Web development encompasses the creation and maintenance of websites
          and web applications.
        </p>
        <p className="er4rsg">
          It involves various tasks, including: <br />
        </p>
        <ul className="wBasic">
          <li>
            <span className="webSubhead">Front-end development:</span> Designing
            and building the visual elements and interactive features users see
            and interact with directly. This involves languages like HTML, CSS,
            and JavaScript.
          </li>
          <li>
            <span className="webSubhead">Back-end development:</span> Creating
            the server-side logic that powers website functionality and manages
            data. This often uses languages like Python, Java, or JavaScript.
          </li>
          <li>
            <span className="webSubhead">Full-stack development:</span>{" "}
            Combining both front-end and back-end development skills.
          </li>
        </ul>
        <p className="er4rsg">
          Web development offers numerous benefits, including: <br />
        </p>
        <ul className="wBasic">
          <li>
            <span className="webSubhead">Creative expression:</span> Bring ideas
            to life by building interactive and visually appealing web
            experiences. Problem-solving: Devise solutions to technical
            challenges and user needs through code.
          </li>
          <li>
            <span className="webSubhead">Demand and growth:</span> The field is
            in high demand with ample job opportunities and career growth
            potential.{" "}
          </li>
          <li>
            <span className="webSubhead">Impact:</span> Create websites and
            applications that can influence and inform people worldwide. Remote
            work possibilities: Many web development roles allow for remote
            work, offering flexibility and location independence.
          </li>
        </ul>
      </div>
      <div className="roadmap">
        {data && data.length > 0
          ? data.map((dataItem) => (
            <a href="/WebDev">
              <div className="item">
                <p className="Itext">{dataItem.heading}</p>
              </div>
            </a>
            ))
          : null}
      </div>
    </div>
  );
};
