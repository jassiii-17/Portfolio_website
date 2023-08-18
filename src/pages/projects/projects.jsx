import Button from "../../components/common/button/button";
import Hr from "../../components/common/hr/hr";
import "./projects.scss";
import arrow from "./../../assets/images/arrow.svg";
import project1 from "./../../assets/images/project1.webp";
import project2 from "./../../assets/images/project2.webp";
import project3 from "./../../assets/images/project3.webp";
import project3b from "./../../assets/images/project3b.webp";
import bi from "./../../assets/images/bi.webp";

function Projects() {
  document.querySelector("title").innerText = "Projects - Jasmeet Singh";
  return (
    <div className="projects">
      <h1 className="projects__heading">Projects</h1>
      <p className="projects__tagline">
        🌐 Welcome to my Web Development Showcase!
      </p>
      <p className="projects__tagline">
        🖥️ Step into the digital realm where lines of code transform into
        captivating online experiences. This is where I breathe life into
        pixels, shaping ideas into interactive realities. As a dedicated web
        developer, I invite you to journey through a curated collection of
        projects that highlight my technical expertise, creativity, and love for
        all things web.
      </p>
      <p className="projects__tagline">
        📚 Curious about the technologies powering these creations? Feel free to
        explore the tech stack that forms the foundation of each project. From
        HTML5, CSS3, to JavaScript each piece of the puzzle plays a crucial role
        in building these digital marvels.
      </p>
      <p className="projects__tagline">
        🌟 Thank you for taking the time to explore my web development journey.
        If you're looking to collaborate, discuss projects, or learn more about
        the stories behind these creations, don't hesitate to reach out. Let's
        connect and explore the endless possibilities of the digital landscape
        together!
      </p>
      <p className="projects__tagline">
        Enjoy the showcase and remember: in the world of web development,
        innovation knows no bounds.
      </p>
      <Hr />
      <div className="projects__list__item">
        <div className="project__image">
          <img
            loading="lazy"
            src={project3}
            alt="project"
            data-aos="fade-right"
          />
        </div>
        <div className="projects__list__item__content" data-aos="fade-up">
          <h2>Task Master: Chrome extention</h2>

          <p>
            • Seamless Task Creation: Effortlessly add tasks with a single
            click. The quick task creation feature lets you enter your to-do.
          </p>

          <p>
            • Priority-Based Task Management: Prioritize your tasks and easily
            identify what needs your attention first.
          </p>

          <p>
            • Effortless Completed Task Management: Review and celebrate your
            accomplishments in the dedicated Completed Task section. Gain
            insights into your productivity and feel empowered to take on more.
          </p>

          <p>
            {" "}
            • Intuitive User Interface: TaskMaster boasts a clean and intuitive
            user interface that keeps distractions at bay. Stay laser-focused on
            your tasks without unnecessary clutter.
          </p>

          <p>
            During this year-long project, I worked on every stage from
            conception, wireframing, IA mapping, prototyping, detailed mockups
            through development and launch.
          </p>
          <Button
            text="Task Master: Chrome Extention"
            link="https://chrome.google.com/webstore/detail/task-master/hegfpkgendbhkmdoiacfekngaignonfo"
          >
            <img loading="lazy" src={arrow} alt="arrow svg" className="arrow" />
          </Button>
        </div>
        <div className="projects__list__item"></div>
        <div className="project__image">
          <img
            loading="lazy"
            src={project3b}
            alt="project"
            data-aos="fade-right"
          />
        </div>
      </div>
      <Hr />
      <div className="projects__list">
        <div className="projects__list__item">
          <div className="project__image">
            <img
              loading="lazy"
              src={project1}
              alt="project"
              data-aos="fade-right"
            />
          </div>
          <div className="projects__list__item__content" data-aos="fade-up">
            <h2>Zoxtro: Anime Merchandise Ecommerce</h2>
            <p>
              An online booking system for in-person or online appointments,
              designed to work standalone or alongside BaseKit Sitebuilder.
            </p>
            <Button text="Zoxtro" link="https://www.zoxtro.tech">
              <img
                loading="lazy"
                src={arrow}
                alt="arrow svg"
                className="arrow"
              />
            </Button>
          </div>
        </div>
        <div className="projects__list__item">
          <div className="project__image">
            <img
              loading="lazy"
              src={project2}
              alt="project"
              data-aos="fade-left"
            />
          </div>
        </div>
        <Hr />
        <div className="projects__list__item">
          <div className="project__image">
            <img loading="lazy" src={bi} alt="project" />
          </div>
          <div className="projects__list__item__content">
            <h2>Data recording and analysis using POWER BI and POWER APPS</h2>
            <p>In Progress</p>
            <Button text="Report">
              <img
                loading="lazy"
                src={arrow}
                alt="arrow svg"
                className="arrow"
              />
            </Button>
          </div>
        </div>
        {/* <div className="projects__list__item">
          <div className="project__image">
            <img loading="lazy" src={project1} alt="project" />
          </div>
          <div className="projects__list__item__content">
            <h2>Go Connect: Bookings</h2>
            <p>
              An online booking system for in-person or online appointments,
              designed to work standalone or alongside BaseKit Sitebuilder.
            </p>
            <p>
              During this year-long project, I worked on every stage from
              conception, wireframing, IA mapping, prototyping, detailed mockups
              through development and launch.
            </p>
            <Button text="lorem.com">
              <img
                loading="lazy"
                src={arrow}
                alt="arrow svg"
                className="arrow"
              />
            </Button>
          </div>
        </div> */}

        {/* <Hr /> */}
        {/* <div className="projects__retired" data-aos="fade-up">
          <div className="heading_group">
            <h2>Graveyard</h2>
            <p>Significant projects I worked on that are now retired.</p>
          </div>
          <div className="projects__retired__item">
            <h6>lorem ipsum</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              amet recusandae quidem enim iusto reiciendis voluptate id.
            </p>
          </div>
          <div className="projects__retired__item">
            <h6>lorem ipsum</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              amet recusandae quidem enim iusto reiciendis voluptate id.
            </p>
          </div>
          <div className="projects__retired__item">
            <h6>lorem ipsum</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              amet recusandae quidem enim iusto reiciendis voluptate id.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
