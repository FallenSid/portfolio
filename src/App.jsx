import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="borderline">
    <img id="bg-img" src="assets/img/background.jpg" alt="Background-img" />
      <Navbar />
      <div className="container">
        <div className="intro">
          <h2>Hey There,</h2>
          <h1>I'm FallenSid (Gaurav Gautam)</h1>
          <h1>An <span className="italic">Ethusiastic</span></h1>
          <h1> <span>Web Developer </span>
          &
          <span> Web Designer</span>
          </h1>
        </div>
        <div className="profile-pic">
        <img src="assets/img/eren.jpeg" alt="" />
        </div>
      </div>
      <div className="footer">
        <div className="card">
          <h3>Vanilla Web Dev</h3>
          <p>strong foundation in vanilla web development i.e. HTML , CSS , JS.</p>
          <p></p>
          </div>
        <div className="card">
          <h3>Node.js</h3>
          <p>
            Experience in building Node.js backend server.
          </p>
          <br />
          <p>
            Buildt a  Node.js bridge between Flask AI model.
          </p>
          <br />
          <p>Handling API calls and JSON efficienty</p>
          
        </div>
        <div className="card">
          <h3>React</h3>
          <p>Proficient in building Dynamic, component-based UIs with react.</p>
          <br />
          <p>Experience in creating Responsive , Interactive web apps with state management and Reusable Components.</p>
        </div>
        
        <div className="card">
          <h3>GSAP(GreenSock Animation Platform)</h3>
          <p>Currenly exploring GSAP to build Smooth animation and engaing user experience.</p>
          <br />
          <p>Using it in my Portfolio to create some Transitions and interactive effects.</p>
        </div>
        <div className="card">
          <h3>Currently Learning</h3>
          <p>Currently Expanding my skills with Tailwind CSS , Framer motion.</p>
          <br />
          <p>Looking forward to learn new and useful libraries and tools that may help in future</p>
        </div>
      </div>
    </div>
  );
}

export default App;
