import React from "react";
import "./Tools.css";
import "../Animations.css";
import { useLocation } from "react-router-dom";
import { useScrollPosition } from "../../utils";

const Tools = () => {
  const [scrollTop, scrollBottom, scrollProps] = useScrollPosition();
  const location = useLocation();
  const comingFromLeft = ["/"];

  const shadowClass =
    scrollTop > 0 && scrollBottom > 0
      ? "scrollTopAndBottomShadow"
      : scrollTop > 0
      ? "scrollTopShadow"
      : scrollBottom > 0
      ? "scrollBottomShadow"
      : "noScrollShadow";

  return (
    <div
      className={
        !comingFromLeft.includes(location.state?.prevLocation)
          ? "slideFromLeft"
          : "slideFromRight"
      }
    >
      <h2 className="headline h2-custom">Tools</h2>
      <div className={`toolsDiv paddingBottom ${shadowClass}`} {...scrollProps}>
        <div>
          <h3 className="h3-custom">Frontend</h3>
          <ul>
            <li>React, Redux & Saga</li>
            <li>HTML & CSS</li>
            <li>Javascript & TypeScript</li>
            <li>Storybook</li>
            <li>Wordpress</li>
            <li>Bootstrap & Tailwind</li>
          </ul>
        </div>
        <div>
          <h3 className="h3-custom">Backend</h3>
          <ul>
            <li>PHP</li>
            <li>MySQL</li>
            <li>Firebase</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div>
          <h3 className="h3-custom">Graphic Design</h3>
          <ul>
            <li>Figma</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Xd</li>
            <li>Adobe inDesign</li>
            <li>Adobe After Effects</li>
          </ul>
        </div>
        <div>
          <h3 className="h3-custom">Other</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Scrum</li>
            <li>CI/CD</li>
            <li>Cypress E2E</li>
            <li>Jest - Unittest</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tools;
