import React from "react";
import "./Frontend.css";
import { useEffect } from "react";
import { frontendRoadmap, frontendData } from "./data";

export const Frontend = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="Frontend">
        <p className="webHead">Getting started</p>
        <p className="webSubhead">
          Frontend web development is the creation of the visual and interactive
          aspects of websites or web applications that users directly interact
          with in their browsers. It involves designing the layout, appearance,
          and functionality to ensure a seamless user experience.
        </p>
        <ul className="subItem">
          {frontendData.map((info, s) => (
            <li key={s}>
              <span className="subIsh">
                <a href="/">{info.Fhead}</a>
              </span>
              {Array.isArray(info.Fcontent) ? (
                <ol className="Fcontent">
                  {info.Fcontent.map((subcon, p) => (
                    <li key={p}>
                      <span>
                        <b>{subcon.head}</b>
                      </span>
                      {subcon.content}
                      <br />
                      <span>
                        <i>Example: {subcon.example}</i>
                      </span>
                    </li>
                  ))}
                </ol>
              ) : (
                <ol className="Fcontent">
                  {info.Fcontent.split("|||").map((content, b) => (
                    <li key={b}>{content.trim()}</li>
                  ))}
                </ol>
              )}
            </li>
          ))}
          <li>
            <span className="subIsh">
              <a href="/">Version Control Systems</a>
            </span>
            <ol className="Fcontent">
              <li>
                Facilitates collaboration and code management among developers.
                <br />
                <span>
                  <i>Examples: Git, SVN</i>
                </span>
              </li>
            </ol>
          </li>
        </ul>
      </div>
      <div className="roadmap">
        {frontendRoadmap && frontendRoadmap.length > 0
          ? frontendRoadmap.map((dataItem, j) => (
              <div key={j}>
                <a className="item" href="/WebDev">
                  <p className="Itext">{dataItem.heading}</p>
                </a>
                {dataItem.id < 5 ? <div className="path"></div> : null}
              </div>
            ))
          : null}
      </div>
    </>
  );
};
