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
          "Web development" is the art and science of creating websites and web
          applications. It involves a diverse range of tasks, from crafting the
          user interface and structure to programming interactivity and
          functionality and building server-side logic.
        </p>
        <ul className="wBasic">
          <li>
            <span className="webSidehead">Front-end development:</span> Focuses
            on the client-side, what users see and interact with directly user
            interface (UI) and user experience (UX).
            <br />
            <span>Key technologies include:</span>
          </li>
          <li>
            <span className="webSidehead">Back-end development:</span> deals
            with the server-side, the behind-the-scenes logic that powers
            websites. Common technologies include:
            <br />
            <span>Key technologies include:</span>
          </li>
          <li>
            <span className="webSidehead">Full-stack development:</span>{" "}
            Combining both front-end and back-end development skills.
          </li>
        </ul>
        <p className="er4rsg">
          Web development offers numerous benefits, including: <br />
        </p>
        <ul className="wBasic">
          <li>
            <span className="webSidehead">Creative expression:</span> Bring
            ideas to life by building interactive and visually appealing web
            experiences. Problem-solving: Devise solutions to technical
            challenges and user needs through code.
          </li>
          <li>
            <span className="webSidehead">Demand and growth:</span> The field is
            in high demand with ample job opportunities and career growth
            potential.{" "}
          </li>
          <li>
            <span className="webSidehead">Impact:</span> Create websites and
            applications that can influence and inform people worldwide. Remote
            work possibilities: Many web development roles allow for remote
            work, offering flexibility and location independence.
          </li>
        </ul>
      </div>
      <div className="roadmap">
        {data && data.length > 0
          ? data.map((dataItem) => (
              <>
                <a className="item" href="/WebDev">
                  <p className="Itext">{dataItem.heading}</p>
                </a>
                {dataItem.id < 5 ? <div className="path"></div> : null}
              </>
            ))
          : null}
      </div>
    </div>
  );
};
