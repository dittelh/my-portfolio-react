import React, { useState } from "react";
import "../Animations.css";
import "./Experience.css";
import { useLocation, Link } from "react-router-dom";
import csis from "../../assets/img/csis.png";
import zealand from "../../assets/img/zealand.jpg";
import synergi from "../../assets/img/synergi.png";
import searchingIcon from "../../assets/img/searchingIcon.png";
import educationIcon from "../../assets/img/educationIcon.png";
import { useScrollPosition } from "../../utils";

const experienceList = [
  {
    img: searchingIcon,
    title: "Webdeveloper",
    company: "Future workplace",
    date: "2025 Feb - ∞",
    text: "I’m now excited to take the next step in my career and join a strong team where I can apply my knowledge and continue to learn and grow. <br/><br/> I’m actively seeking my first job as a graduate, with a focus on Frontend Development.<br/><br/>",
    textExpanded:
      "I’m passionate about modern frameworks like React.js, API handling with REST and Redux Saga, and working with UI component libraries such as Storybook. <br/><br/>I also have experience with Cypress for E2E and unit testing, including Jest, and have worked in agile environments using Scrum. In addition, I have backend experience with technologies like PHP, Node.js, MySQL, and Firebase. <br/><br/>I’m open to exploring new technologies and expanding my skill set, so if you or someone you know is looking for a dedicated and curious Web Developer, I’d love to connect!<br/><br/>",
  },
  {
    img: educationIcon,
    title: "Bachelor of Web Development",
    company: "Zealand Roskilde",
    date: "2023 Sep - 2025 Jan",
    text: "During my PBA in Web Development, I gained a great foundation in Frontend and Backend development, working with technologies like JavaScript frameworks, PHP, and databases. <br/><br/>",
    textExpanded:
      "I learned how to build modern, user-friendly web applications, focusing on performance, accessibility, and best coding practices. Additionally, I developed skills in software architecture and API development. <br/><br/>My studies also emphasized teamwork, agile methodologies, and problem-solving, which I applied during my internship at CSIS while working on my final bachelor project. <br/><br/>",
  },
  {
    img: csis,
    title: "Software Engineering developer",
    company: "CSIS Security Group",
    date: "2024 Aug - 2025 Jan",
    text: "During my 10-week internship, I gained hands-on experience working with a large React (TypeScript) codebase, focusing on building accessible and maintainable user interfaces.<br/><br/> ",
    textExpanded:
      "I strengthened my CSS skills by applying SCSS and the BEM methodology while contributing to an in-house component library (Storybook).<br/><br/> I also explored end-to-end and integration testing(Cypress), gaining insight into cloud operations and CI/CD processes essential for modern software development. <br/><br/>Additionally, I improved my Git workflow, learning best practices for collaboration and version control. <br/>Working with Jira and participating in daily standups gave me valuable experience in agile project management and team coordination. <br/><br/>After that I made my final bachelor project at CSIS Security Group and earned a grade of 12. The project focused on transitioning their Chronos service to a new platform, utilizing React, TypeScript, Jest, Cypress, Redux Saga, and Storybook. <br/><br/>",
  },
  {
    img: educationIcon,
    title: "AP Graduate in Multimedia Design",
    company: "Zealand Køge",
    date: "2021 Sep - 2023 June",
    text: "In my AP Graduate in Multimedia Design, I developed strong UI/UX design skills, learning to create intuitive and visually appealing user interfaces. <br/><br/> ",
    textExpanded:
      "I developed skills in frontend development, working with HTML, CSS, and JavaScript to build responsive websites. Additionally, I explored graphic design and content creation using tools like Adobe Illustrator. <br/><br/>The program also introduced me to digital marketing strategies, including SEO and social media management. <br/><br/>Throughout my studies, I worked on various projects that strengthened my ability to collaborate in teams and follow agile workflows.<br/><br/>",
  },
  {
    img: synergi,
    title: "Graphic Designer",
    company: "Synergi",
    date: "2023 Jan - 2023 April",
    text: "I did 10 weeks internship at Synergi1.dk, where I worked as a graphic designer, creating marketing materials and visual content.<br/><br/> I used Adobe Illustrator and InDesign to design brochures, flyers, and other logos etc. <br/>This experience strengthened my design skills and attention to detail.",
    textExpanded: "",
  },
  {
    img: zealand,
    title: "Student Assistant",
    company: "Zealand Køge",
    date: "2022 Sep - 2023 Feb",
    text: "I worked as a student assistant, where I was in the Makerspace. My role included assisting students with using various machines, tools, and programs. <br/><br/>I also helped guide guests from other schools, providing support and answering questions. <br/><br/>Additionally, I created instructional guides for the machines to help students work more efficiently and safely.",
    textExpanded: "",
  },
];

const TimelineExperienceListItem = ({
  img,
  title,
  company,
  date,
  text,
  textExpanded,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li>
      <div className="timelineObject">
        <div className="timelineExperienceContainer">
          <img className="experienceImg" src={img} alt={title} />
          <div>
            <h2>{title}</h2>
            <h3>{company}</h3>
            <h4>{date}</h4>
          </div>
        </div>
        <p dangerouslySetInnerHTML={{ __html: text }} />

        {isExpanded && <p dangerouslySetInnerHTML={{ __html: textExpanded }} />}
        {textExpanded !== "" && (
          <p className="readMoreAndLess" onClick={toggleExpand}>
            {isExpanded ? "... Read less" : "Read more..."}
          </p>
        )}
      </div>
    </li>
  );
};

const Experience = () => {
  const [scrollTop, scrollBottom, scrollProps] = useScrollPosition();
  const location = useLocation();
  const comingFromLeft = ["/", "/tools"];

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
          ? location.state?.prevLocation === "/projects-details"
            ? "slideFromTop"
            : "slideFromLeft"
          : "slideFromRight"
      }
    >
      <h2 className="headline h2-custom">Experience</h2>
      <section className={`timeline ${shadowClass}`} {...scrollProps}>
        <ul>
          {experienceList.map((experience, index) => (
            <TimelineExperienceListItem key={index} {...experience} />
          ))}
        </ul>
      </section>
      <Link className="linkTag" to={"/projects-details"}>
        <button className="projectButton">
          CLICK TO <br /> SEE PROJECTS
        </button>
      </Link>
    </div>
  );
};

export default Experience;
