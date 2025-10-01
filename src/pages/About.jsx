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
            <li>Skills In Action</li>
            <li>Currently Learning</li>
            <li>Call in Action</li>
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
          <p>My coding journey began in 12th grade , where I studied Computer Science with Python and SQL and discovered my passion for programming along with my friend Farman, he helped me to sharpen my skills in python .</p>
          <p>After schooling my friend Rachit introduced me to web development with HTML , CSS and JavaScript.</p>
          <p>Together, we went on to co-found Team Creatrix, When we collaborated on project Meddibuddy an AI Powered Chatbot -</p>
          <p>I built the frontend and Node.js integration, while he worked on the Flask API. That experience not only strengthen my skills but also taught me the power of teamwork.</p>
          <br />
          <hr />
          <h1>SKILLS IN ACTION</h1>
          <br />
          <p>I am Experienced in creating static and Dynamic user interface , Ensuring website look and perform great</p>
          <p>I've worked on projects like a dedicated website for a web novel (The-Ashvathha) and Ai-powered chatbot Interface , where I designed intuitive  UIs and integrated backend services </p>
          <p>Currently I'm exploring animation libraries like GSAP and Framer Motion to bring my projects to life</p>
          <br />
          <hr />
          <h1>CURRENTLY LEARNING</h1>
          <br />
          <p>Right now I'm expanding my skills with Tailwind CSS, GSAP, and Framer Motion and Some libraries i could use </p>
          <br />
          <hr />
          <h1>CALL IN ACTION</h1>
          <br />
          <p>I'm always open to collaborating on exciting projects or freelance opportunities</p>
          <p>Feel free to check out my work on the project page or get in touch through the Contact section </p>
          <br />
          <hr />

        </div>
      </div>
    </div>
  )
}

export default About
