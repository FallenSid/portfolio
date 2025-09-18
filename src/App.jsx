import "./App.css";
import Navbar from "./components/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
function App() {

  const container = useRef();
  useGSAP(()=>{
    gsap.from('.profile-pic',{
      x:100,
      opacity:0,
      duration:1,
      delay:0.5
    })}
  ); 

  useGSAP(()=>{
    gsap.from('.text-intro',{
      y:100,
      opacity:0,
      duration:1.5,
      delay:1,
      stagger:0.25
    })
  })

  useGSAP(()=>{
    gsap.from('.container',{
      height:'100vh',
      delay:2.5,
    })
  })

  return (
    <div className="borderline">
    <img id="bg-img" src="assets/img/background.jpg" alt="Background-img" />
      <Navbar />
      <div className="container">
        <div className="intro">
          <h2 className="text-intro">Hey There,</h2>
          <h1 className="text-intro">I'm FallenSid (Gaurav Gautam)</h1>
          <h1 className="text-intro">An <span className="italic">Ethusiastic</span></h1>
          <h1 className="text-intro"> <span>Web Developer </span>
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
          <p>Strong foundation in vanilla web development i.e. HTML , CSS , JS.</p>
          <p></p>
          </div>
        <div className="card">
          <h3>Node.js</h3>
          <p>
            Experience in building Node.js backend server.
          </p>
          <br />
          <p>
            Built a  Node.js bridge between Flask AI model.
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
