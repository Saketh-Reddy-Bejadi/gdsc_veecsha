import "./WebDev.css";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import reactJS from "../../assets/reactJS.svg";
import nodeJS from "../../assets/nodejs.svg";
import { useEffect } from "react";
import data, { webDev } from "./data";

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
          {webDev && webDev.length > 0
            ? webDev.map((t, k) => (
                <div key={k}>
                  {t.cate.map((category, m) => (
                    <li key={m}>
                      <span className="webSidehead">{category.head}</span>
                      {category.content} <br />
                      <span>{category.sidetech}</span>
                      {category.techs?        <ul className="subItem">
                        {category.techs.map((tech, n) => (
                          <li key={n}>
                            <span className="subIsh">
                              <a href="/">{tech.subhead}</a>
                            </span>
                            {tech.explaination}
                          </li>
                        ))}
                      </ul>:null}
                    </li>
                  ))}
                </div>
              ))
            : null}

        </ul>
        
      </div>
      <div className="roadmap">
        {data && data.length > 0
          ? data.map((dataItem, j) => (
              <div key={j}>
                <a className="item" href="/WebDev">
                  <p className="Itext">{dataItem.heading}</p>
                </a>
                {dataItem.id < 5 ? <div className="path"></div> : null}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
