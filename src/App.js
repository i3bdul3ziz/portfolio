import React, { useState } from "react";
import "css-doodle";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  let [projects, setProjects] = useState([
    {
      name: "رتب مشروعك",
      animate: "fade-right",
      desc:
        "Manage projects by creating lists and tasks with moving tasks between lists by drag and drop functionalty, you can invite other team members to you project",
      image: "https://i.ibb.co/zNtP3gS/project-management-app.png",
      techs: "NodeJS, MongoDB, ReactJS",
      link: "https://projects-management3.herokuapp.com/",
    },
    {
      name: "Trip To Go",
      animate: "fade-up",
      desc:
        "The perfect connection between the tourist and tourism companies for trips that exceed your expectations in Saudi Arabia.",
      image: "https://i.ibb.co/r4qc48y/trip-to-go-app.png",
      techs: "NodeJS, MongoDB, ReactJS",
      link: "http://triptogo3.herokuapp.com/home",
    },
    {
      name: "!WASTE",
      animate: "fade-left",
      desc:
        "Connects neighbours with each other and with local businesses so surplus food can be shared, not thrown away. ",
      image: "https://i.ibb.co/ZdCsGhF/waste-app.png",
      techs: "NodeJS, MongoDB, ReactJS",
      link: "https://notwaste.herokuapp.com/",
    },
    {
      name: "Shopper",
      animate: "fade-up-right",
      desc:
        "Brings together all antique dealers and customers onto a single online marketplace.",
      image: "https://i.ibb.co/jLmZpfK/shopper-app.png",
      techs: "NodeJS, MongoDB, EJS",
      link: "https://shopperstore.herokuapp.com/home",
    },
    {
      name: "Breakout-Game",
      animate: "fade-up-left",
      desc: "Breakout all the bricks to win",
      image:
        "https://github.com/i3bdul3ziz/Breakout-Game/blob/master/img/landing-page.png?raw=true",
      techs: "HTML/CSS, JS, JQuery, Canvas",
      link: "https://i3bdul3ziz.github.io/Breakout-Game/",
    },
  ]);
  AOS.init({
    duration: 1500,
  });

  let scrollUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let navbar = document.getElementById("navbar");
    scrollPosition = window.scrollY;
    let backToTop = document.getElementById("back-to-top");

    if (scrollPosition >= 50) {
      navbar.classList.add("scroll-down");
      backToTop.style.display = "block";
    } else {
      navbar.classList.remove("scroll-down");
      backToTop.style.display = "none";
    }
  });

  return (
    <>
      <div id="navbar" className="navbar">
        <ul className="nav-content">
          <li className="nav-items">
            <a href="#about">ABOUT</a>
          </li>
          <li className="nav-items">
            <a href="#experience">EXPERIENCE</a>
          </li>
          <li className="nav-items">
            <a href="#projects">PROJECTS</a>
          </li>
          <li className="nav-items">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
      <header className="header">
        <div>
          <div className="svg-style">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 376 311"
              width="376"
              height="311"
            >
              <defs>
                <path
                  d="M244.95 283.71L373.52 158.71L244.95 30.14"
                  id="bupxYk2r"
                ></path>
                <path
                  d="M131.95 29.14L3.38 154.14L131.95 282.71"
                  id="h322pElmva"
                ></path>
                <path d="M224.95 2.33L147.95 307.1" id="a3fhcaFQ9z"></path>
              </defs>
              <g>
                <g>
                  <g>
                    <g>
                      <use href="#bupxYk2r" className="draw"></use>
                    </g>
                  </g>
                  <g>
                    <g>
                      <use href="#h322pElmva" className="draw"></use>
                    </g>
                  </g>
                  <g>
                    <g>
                      <use href="#a3fhcaFQ9z" className="draw"></use>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="header-box">
          <h1 className="header-text">Abdulaziz's</h1>
          <h2 className="header-content">Portfolio</h2>
          <svg height="50" width="550" className="job-titles">
            <text id="s-text" x="0" y="20" fill="none">
              Software Engineer - Full-Stack Developer
            </text>
            <g>
              <use href="#s-text" className="text-copy"></use>
              <use href="#s-text" className="text-copy"></use>
              <use href="#s-text" className="text-copy"></use>
              <use href="#s-text" className="text-copy"></use>
              <use href="#s-text" className="text-copy"></use>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dotted-circle"
            width="13vw"
            height="13vw"
            overflow="visible"
          >
            <circle
              cx="6.5vw"
              cy="6.5vw"
              r="13vw"
              fill="none"
              stroke="#fff"
              stroke-width="1"
              stroke-miterlimit="10"
              stroke-dasharray="12.921,11.9271"
            />
          </svg>
        </div>
        <div className="scratch-shape"></div>

        <div className="doodle">
          <css-doodle>
            {`
            :doodle {
              @grid: 5 / 140px;
            }
            border-radius: @repeat(4, @rand(40%, 60%));
            background: @pick(white);
          `}
          </css-doodle>
        </div>
      </header>
      <section id="about" className="lighter-bg">
        <div data-aos="fade-up" className="section-container">
          <h1 data-aos="fade-right">About Me</h1>
          <div className="p-container">
            <p>
              Software Engineer with a computer sciences background, and
              experience in web development and programming, passionate to learn
              new programming technologies, offering solving problems using
              logic, motivated by effective design of highly functioning
              programs. Seeking a position where I can enhance my skills in web
              technologies to develop and implement solutions that meet business
              needs.
            </p>
            <div className="link-con">
              <a href="https://drive.google.com/file/d/1gVYD_fPlNDA21CI302KsQ_srEaBAAtMd/view?usp=sharing">
                <button className="link-button">Abdulaziz's CV</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="experience">
        <div data-aos="fade-down" className="section-container exp-section">
          <h1 data-aos="fade-left" data-content="Experience">
            Education & Experience
          </h1>
          <div data-aos="fade-up" className="vertical"></div>
          <div className="exp-container">
            <h2>Software Engineer Immersive</h2>
            <h4>
              General Assembly & Misk Academy <span>Fub 2020 - May 2020</span>{" "}
            </h4>
            <p>
              A great experience with General Assembly, Misk Academy, and
              Ministry of Communications and Information. We came out with four
              real-world projects in many programming languages such as JS,
              ReactJS, NodeJS, ExpressJS, MongoBD, Ruby, Ruby on Rails,
              PostgreSQL, and many other technologies and subjects.
            </p>
          </div>
          <div className="exp-container">
            <h2>Computer Sciences</h2>
            <h4>
              Taif University <span>Aug 2014 - May 2019</span>{" "}
            </h4>
            <p>
              Developed an Online Compiler in Taif University as a graduation
              project, it's a web app that provides education services, with
              online editor to write and run code online by the most popular
              languages : C++, JAVA, and Python , this project developed by (
              ASP.Net , C# , and Microsoft SQL Server ).
            </p>
          </div>
        </div>
      </section>
      <section id="projects" className="lighter-bg">
        <div data-aos="fade-down" className="section-container">
          <h1 data-aos="fade-left">Projects</h1>
          <div className="cards-container">
            {projects.map((project, index) => (
              <div data-aos={project.animate} key={index} className="cards">
                <a href={project.link}>
                  <img
                    className="project-image"
                    src={project.image}
                    alt="project image"
                  />
                </a>
                <p className="project-name">{project.name}</p>
                <p className="project-desc">{project.desc}</p>
                <p className="project-techs">{project.techs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <p>
          <div className="icons-con">
            <a
              className="icon linked-in"
              href="https://www.linkedin.com/in/abdulaziz-al-thagafi/"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="linkedin" />
            </a>
            -
            <a className="icon git-hub" href="https://github.com/i3bdul3ziz">
              <FontAwesomeIcon icon={faGithub} className="github" />
            </a>
            -
            <a className="icon gmail" href="mailto:labdul2ziz@gmail.com">
              <FontAwesomeIcon icon={faGoogle} className="mymail" />
            </a>
          </div>
        </p>
      </section>
      <button
        onClick={(e) => {
          scrollUp();
        }}
        id="back-to-top"
        className="icon go-up"
      >
        <FontAwesomeIcon icon={faChevronUp} id="go-up" />
      </button>
    </>
  );
}

export default App;
