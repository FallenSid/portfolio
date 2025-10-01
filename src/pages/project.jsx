import Navbar from "../components/Navbar";
import "./project.css";
const project = () => {
  return (
    <div className="project-borderline borderline">
      <Navbar />
      <img id="bg-img" src="assets/img/Projects_bg.jpg" alt="" />
      <h1>HEY THERE ,</h1>
      <h1>
        {" "}
        HERE ARE SOME <span> PROJECTS </span> I HAVE BUILT SO FAR
      </h1>
      <br />

      <div className="node-ashvatha">
        <h1 className="center-text">
          The Ashvatha (<span>NodeJs</span>)
        </h1>
        <div className="detail-card">
          <div className="card-left">
            <div className="left-text">
            <h2>THE ASHVATHHA(NodeJs)</h2>
            <img src="assets/ashvatha-nodeJs/Homepage.png" alt="" />
            <h2>LINKS TO CODE:  </h2>
            <ul>

            <li>

            <a href="https://github.com/FallenSid/Ashvatha-NodeJs-">Link to Repository</a>
            </li>
            </ul>
            </div>
          </div>
          <div className="card-right">
            <div className="right-text">
              <h2>DESCRIPTION</h2>
              <p>
                Webpage based on a WebNovel Named "The-Ashvatha" published by
                author "Raizen".
              </p>
              <p>
                This webpage follows the creepy and dark theme of novel and
                providing a assets to the novel readers for example- <br />
                <br />
                <span>volume page</span> - guides readers to desired Volume  <br />
                <span>character page</span> - showcase characters and a short info about them <br />
                <span>Feedback page</span> - directly send feedback of users to author <br />
                <span>About page</span> - Introduce author of novels to readers <br />
              </p>
              <br />
              <h2>TOOLS USED</h2>
              <ul>
                <li>Basic HTML, CSS, and JavaScript.</li>
                <li>NodeJs - Used for creating backend server using build-in modules like fs and http.</li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>



      <br />
      <div className="Medi-buddy-Chatbot">
        <h1 className="center-text">
          Medi-Buddy-Chatbot (<span>NodeJs</span>)
        </h1>
        <div className="detail-card">
          <div className="card-left">
            <div className="left-text">
            <h2>MEDI-BUDDY CHATBOT</h2>
              <img id="medi-buddy-img" src="assets/medi-buddy/homepage.png" alt="" />
            <h2>LINKS TO CODE:  </h2>
            <ul>
            <li>
            <a href="https://github.com/Creatrix106/Medi_buddy_chatbot/tree/frontend" target="_placeholder">Link to Repository</a>
            </li>
            </ul>
            </div>
          </div>
          <div className="card-right">
            <div className="right-text">
              <h2>DESCRIPTION</h2>
              <p>
                I worked on medi-buddy-chatbot as a Frontend developer. <br />
                <br />
                It is an AI Powered chatbot that takes and suggests suitable medicines for small diseases like fever , cold etc. <br />
                <br />
                It was an Minimal Viable Project created for practice API calls and handling , creating a bridge between flask backend and NodeJs backend for me,  while my friend handled flask backend all by himself.
              </p>
              
              <br />
              <h2>TOOLS I USED</h2>
              <ul>
                <li>Basic HTML, CSS, and Javascript</li>
                <li>NodeJs - used modules such as.. <br />
                <ul>
                  <li>Express - to create a server.</li>
                  <li>Path - to server static files.</li>
                  <li>Axios - to handle GET and POST request.</li>
                </ul>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
      <br />




      <div className="react-ashvatha">
        <h1 className="center-text">
          The Ashvatha (<span>React</span>)
        </h1>
        <div className="detail-card">
          <div className="card-left">
            <div className="left-text">
            <h2>THE ASHVATHHA(React)</h2>
              <img src="assets/ashvatha-react/homepage.png" alt="" />
            <h2>LINKS TO CODE:  </h2>
            <ul>

            <li>

            <a href="https://github.com/FallenSid/The-Ashvathha" target="_placeholder">Link to Repository</a>
            </li>
            </ul>
            </div>
          </div>
          <div className="card-right">
            <div className="right-text">
              <h2>DESCRIPTION</h2>
              <p>
                Recreated The-Ashvatha webpage Using ReactJs for overall Better performance and tried to make it look more modern.
                <br />
                While practicing to create React app.
              </p>
              
              <br />
              <h2>TOOLS USED</h2>
              <ul>
                <li>Vite + React </li>
                <li>Javascript/JSX</li>
                <li>CSS</li>
                <li>React Router Dom - to serve multiple pages.</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
      <br />



      <div className="portfolio-react">
        <h1 className="center-text">
          PortFolio (<span>React</span>)
        </h1>
        <div className="detail-card">
          <div className="card-left">
            <div className="left-text">
            <h2>PORTFOLIO (React)</h2>
              <img src="assets/portfolio/homepage.png" alt="" />
            <h2>LINKS TO CODE:  </h2>
            <ul>

            <li>

            <a href="https://github.com/FallenSid/portfolio" target="_placeholder">Link to Repository</a>
            </li>
            </ul>
            </div>
          </div>
          <div className="card-right">
            <div className="right-text">
              <h2>DESCRIPTION</h2>
              <p>
                The very Portfolio you are in , is exactly the one you want description about, so i guess you don't need it just explore the contents and if you find me interesting make sure to contact me via contact page.
              </p>
              <p>Hope you like my work. <br />
              Have a good day/night.
              </p>
              
              <br />
              <h2>TOOLS USED</h2>
              <ul>
                <li>Vite + React </li>
                <li>Javascript/JSX</li>
                <li>CSS</li>
                <li>React Router Dom - to serve multiple pages.</li>
                <li>GSAP - to add some transitions to make UI more engaging</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
      <br />



    </div>
  );
};

export default project;
