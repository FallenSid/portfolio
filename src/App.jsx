import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="borderline">
    <img id="bg-img" src="assets/img/background.jpg" alt="Background-img" />
      <Navbar />
      <div className="container">
        <div className="intro">
          <h1>Hey There,</h1>
          <h1>I'm FallenSid (Gaurav Gautam)</h1>
          <h1>An <span>Ethusiastic</span></h1>
          <h2> <span>Web Developer </span>
          &
          <span> Web Designer</span>
          </h2>
        </div>
        <div className="profile-pic">
        <img src="assets/img/eren.jpeg" alt="" />
        </div>
      </div>
      <div className="footer">i am footer</div>
    </div>
  );
}

export default App;
