import Navbar from "../components/Navbar"
import './project.css'
const project = () => {
  return (
    <div className="project-borderline borderline">
        <Navbar/>
        <img id="bg-img" src="assets/img/Projects_bg.jpg" alt="" />
        <h1>HEY THERE ,</h1>
        <h1> HERE ARE SOME <span> PROJECTS </span> I HAVE BUILT SO FAR</h1>
        <br />

        <div className="node-ashvatha">
          <h1 className="center-text">The Ashvatha (<span>NodeJs</span>)</h1>
          <div className="detail-card">
            <div className="card-left"></div>
            <div className="card-right"></div> 
          </div>
        </div>

    </div>
  )
}

export default project
