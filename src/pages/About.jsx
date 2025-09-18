import React from 'react'
import './About.css'
import Navbar from '../components/Navbar'
const About = () => {
  return (
    <div className='borderline'>
      <img className='abt-bg' id='bg-img' src="assets/img/AboutPageBg.jpg" alt="About-Page-Background" />
      <Navbar/>
      <div className="container abt-container">
        <div className="aside">
          <h1>Table Of Content</h1>
          <ul>
            <li>Introductionn</li>
            <li>How I Started Coding </li>
          </ul>
        </div>
        <div className="details">
          <h1>INTRODUCTION</h1>
          <br />
          <p>Hey , I'm Gaurav (AKA FallenSid), a first-year Pharmacy student with a strong passion web development. </p>
          <p>Even though my academic background is in healthcare , I've been very interested in coding and designing since i find it Fun. </p>
          <p>I started HTML , CSS and JavaScript, and now I enjoy Working with React and Node.js to build projects.</p>
          <br />
          <hr />
          <h1>HOW I STARTED CODING?</h1>
          <br />
          <p>My coding journey began in 12th grade , where I studied Computer Science with Python and SQL and discovered my passion for programming.</p>
          <p>After schooling my friend Rachit introduced me to web development with HTML , CSS and JavaScript.</p>
          <p>Together, we went on to co-found Team Creatrix, When we collaborated on project Meddibuddy an AI Powered Chatbot -</p>
          <p>I built the frontend and Node.js integration, while he worked on the Flask API. That experience not only strengthen my skills but also taught me the power of teamwork.</p>
          <br />
          <hr />
        </div>
      </div>
    </div>
  )
}

export default About
