import "./home.scss";
import Hr from "../../components/common/hr/hr";
import Button from "../../components/common/button/button";
import IconLink from "../../components/common/iconLink/iconLink";
import githubLogo from "./../../assets/images/social/github.svg";
import twitterLogo from "./../../assets/images/social/twitter.svg";
import instagramLogo from "./../../assets/images/social/instagram.svg";
import linkedinLogo from "./../../assets/images/social/linkedin.svg";
import Card from "../../components/card/card";

import Tag from "../../components/tag/tag";
import cn from "./../../assets/images/cn.png";
import iitb from "./../../assets/images/iitb.png";
import robo from "./../../assets/images/robo.png";
import dev from "./../../assets/images/dev.png";

function Home() {
  document.querySelector("title").innerText = "Jasmeet Singh - Web Developer";
  const skills = [
    "Html5",
    "Css3",
    "Tailwind & Bootstrap",
    "Sass/Scss",
    "Javascript(es6)",
    "ReactJs",
    "VHDL",
    "Redux",
    "Firebase",
    "SQL",
    "git & github",
    "C & C++",
    "VS Code",
    "Postman",
    "IntelliJ IDEA",
    "Vivado",
  ];
  return (
    <div className="home">
      <h1 className="home__heading" data-aos="fade-right">
        Computer Science Enthusiast, trapped in learning-developing loop.
      </h1>
      <div className="home__intro" data-aos="fade-up">
        <p>
          I’m Jasmeet Singh, a India based web-developer with over three years
          of experience. I'm a 20 year old self-taught programmer with
          experience in C & CPP, web technologies such as ReactJS, SASS, Redux,
          SQL. I am currently a final year student at NIT Srinagar studying
          Electronics and Communication Engineering.
        </p>
      </div>
      <div className="home__links_list">
        <ul className="home__links">
          <li>
            <IconLink
              text="linkedin"
              link="https://www.linkedin.com/in/jasmeet-singh-75911b1b5/"
              logo={linkedinLogo}
            />
          </li>
          <li>
            <IconLink
              text="twitter"
              link="https://twitter.com/jasmeetsingh_17"
              logo={twitterLogo}
            />
          </li>
          <li>
            <IconLink
              text="github"
              link="https://github.com/jassiii-17"
              logo={githubLogo}
            />
          </li>
          <li>
            <IconLink
              text="instagram"
              link="https://www.instagram.com/jassiii_17/"
              logo={instagramLogo}
            />
          </li>
        </ul>
        <Button
          link={"mailto:jasmeetsingh171002@gmail.com"}
          text={"Email me"}
        />
      </div>
      <Hr />
      <div className="home__projects">
        <h2>Certificates</h2>
        <p>A collection of certificates which I gained till now.</p>
        <div className="home__projects_featured">
          <Card
            projectLink="https://drive.google.com/file/d/1pMliigaXM93VHhs4nrppDyYM83L-8sMy/view"
            logo={iitb}
            heading="Indian Institute of Technology, Bombay"
            content="Certificate for completion of C Program training"
            data-aos="fade-right"
          />
          <Card
            projectLink="https://files.codingninjas.in/certificate167545222461af08a6986857a4f62d12a1c62b7.pdf"
            logo={cn}
            heading="Conding Ninjas"
            content="DSA in C++ Completion Certificate"
            data-aos="fade-right"
          />
          <Card
            projectLink="https://drive.google.com/file/d/1B-Wtlaix8PhQpfmnOWDcBQoFPiJ7KtRe/view?usp=drive_link"
            logo={dev}
            heading="Google Developers Group, Jammu"
            content="We organized the first-ever Devfeast of GDG Jammu. I along with
            my team managed to make that event successful with over 200+ attendees and 13 speakers who gave talks on different technology topics in which they had their expertise."
            data-aos="fade-right"
          />
          <Card
            projectLink="https://drive.google.com/file/d/15RU5SpRw_9sFqQ43cRB_jwrZ1uMe5kch/view?usp=sharing"
            logo={robo}
            heading="Robonox : Robotics & Lannet club"
            content="Management of Event organized by Robotics and Lannet club of National Institute of Technology,
            Srinagar organized an open-to-all event: “Best Out of Waste 2023”."
            data-aos="fade-right"
          />
        </div>
      </div>
      <Hr />

      <div className="home__skills" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Here are some of my skills and tools with which I have worked.</p>

        <div className="home__skils__tags">
          {skills.map((skill) => (
            <Tag key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
