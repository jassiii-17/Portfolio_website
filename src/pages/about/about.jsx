import "./about.scss";
import mine from "./../../assets/images/mine.webp";
import Hr from "../../components/common/hr/hr";

function About() {
  document.querySelector("title").innerText = "About - Jasmeet Singh";
  return (
    <div className="about">
      <div className="about__image">
        <img src={mine} alt="Me" loading="lazy" data-aos="fade-down" />
      </div>
      <div className="container">
        <p data-aos="fade-up">
          I'm a 20 year old self-taught programmer with a passion for design and
          technology. My experience includes programming languages like c++ and
          web technologies such as ReactJS, Javascript, SASS. I specialize in
          building web applications with a focus on simplicity and usability.
        </p>
        <p data-aos="fade-up">
          Currently, I'm a Final year student at NIT Srinagar studying
          Electronics and Communication Engineering. Additionally, I have worked
          on several personal projects, including Task Master, a TODO list
          chrome extention, and Zoxtro, an anime merchandise e-commerce
          platform.
        </p>
        <p data-aos="fade-up">
          In my free time, I enjoy exploring new places, trying new foods, and
          learning about different cultures. I also have a strong interest in
          fitness.
        </p>

        <Hr />
        <div>
          <h2>Education</h2>
          <div classname="about_work_list"></div>
          <a className="about__work_list__item" href="/" data-aos="fade-right">
            <span className="content__title">
              <a href="https://nitsri.ac.in/">
                National Institute of Technology, Srinagar
              </a>
            </span>
            <div className="contact_detail">
              <p></p>
              <p>July 2024</p>
            </div>
          </a>
          <a className="about__work_list__item" href="/" data-aos="fade-right">
            <span className="content__title">
              <a href="https://www.bsfschooljammu.org/">
                B.S.F. Sr. Sec. School, Jammu
              </a>
            </span>
            <div className="contact_detail">
              <p></p>
              <p>March 2020</p>
            </div>
          </a>
        </div>
        <Hr />
        <div>
          <h2>Experince</h2>
          <div className="about__work_list">
            <a
              className="about__work_list__item"
              href="/"
              data-aos="fade-right"
            >
              <span className="content__title">
                <a href="https://www.iitrpr.ac.in/">IIT Ropar</a>
              </span>
              <div className="contact_detail">
                <p>Research Intern</p>
                <p>Dec 2022 - Feb 2023</p>
              </div>
            </a>
            <br></br>
            <p>• Studied Underwater Wireless Communication System.</p>
            <p>• Programming Platform used: MATLAB</p>
            <p>
              • Wrote Maltlab codes for underwater communication analysis and
              found how external factors affect our wireless underwater
              communication and how to overcome them.
            </p>
            {/* <a className="about__work_list__item" href="/" data-aos="fade-left">
              <span className="content__title">SAE India Club</span>
              <div className="contact_detail">
                <p>Full Stack developer</p>
                <p>2022 - &nbsp;&nbsp;&nbsp;&nbsp;</p>
              </div>
            </a> */}
            {/* <a
              className="about__work_list__item"
              href="/"
              data-aos="fade-right"
            >
              <span className="content__title">Syndicate</span>
              <div className="contact_detail">
                <p>Web Dev Team Member</p>
                <p>2022 - &nbsp;&nbsp;&nbsp;&nbsp;</p>
              </div>
            </a> */}
          </div>
        </div>
        <Hr />
        <div data-aos="fade-up">
          <h2>About this site</h2>
          <p className="about_the_site__tagline">
            In case you were wondering this site is:
          </p>
          <ul>
            <li>
              Designed and built on a Mac using{" "}
              <a href="https://www.figma.com/">Figma</a> and{" "}
              <a href="https://www.code.visualstudio.com/">
                Visual Studio Code
              </a>
              .
            </li>
            <li>
              Hosted and deployment by{" "}
              <a href="https://www.netlify.com/">Netlify</a>.
            </li>
            <li>
              Powered by <a href="https://www.reactjs.org/">ReactJs</a>
            </li>
            <li>
              Set in the beautiful{" "}
              <a href="https://www.monolisa.dev/">Monolisa</a> typeface.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
