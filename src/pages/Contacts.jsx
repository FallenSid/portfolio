import Navbar from "../components/Navbar";
import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./contacts.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { redirect } from "react-router-dom";

const Contacts = () => {
  const container = useRef();
  useGSAP(() => {
    gsap.from(".content", {
      x: "-85vw",
      delay: 0.5,
      duration: 1,
    });
  });

  useGSAP(() => {
    gsap.from("#contact-text p", {
      opacity: 0,
      y: 30,
      delay: 1.5,
      duration: 0.5,
      stagger: 0.3,
    });
  });

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_36q3isl", "template_g2znn5s", form.current, {
        publicKey: "PMpEdf2sZYvQRuVgO",
      })
      .then(
        () => {
          console.log("SUCCESS");
          success.current.style.display = "block";
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  confirm("Due to some technical issues the email service is currently disabled, please contact me via other platforms mentioned below. I am really sorry for the inconvenience.");
  const success = useRef();
  return (
    <div className="contact-background borderline">
      <Navbar />
      <div className="after-click">
        <div ref={success} className="success">
          <button
            className="close-btn"
            onClick={() => {
              success.current.style.display = "none";
            }}
          >
            X
          </button>
          <h1>THANK YOU</h1>
          <p>Your Message have been sent successfully</p>
          <p>I will reach you out as soon as possible</p>
        </div>
      </div>

      <div className="content">
        <div className="slide">
          <div className="intro-text">
            <h2>GOT A PROJECT IDEA, FREELANCE WORK ,</h2>
            <h2> OR JUST WANT TO SAY HEY?</h2>
            <h2>FEEL FREE TO REACH OUT</h2>
          </div>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name:</label>
              <input
                required
                type="text"
                placeholder="Your name"
                name="user_name"
              />
              <label>Subject:</label>
              <input
                required
                type="text"
                placeholder="Subject"
                name="subject"
              />
              <label>Email:</label>
              <input
                required
                type="email"
                placeholder="Your email"
                name="user_email"
              />
              <label>Message:</label>
              <textarea name="message" placeholder="Your message" />
              <input
                disabled
                id="send-btn"
                type="submit"
                value="Send"
                onClick={() => {
                  form.current.reset();
                }}
              />
            </form>
          </div>
        </div>

        <img
          id="contact-slide"
          src="assets/img/contactpagebg.png"
          alt="Contact Page BackGround"
        />
      </div>

      <div id="contact-text" className="contact-text">
        <p>
          NOTHING IS <span>PERMANENT</span>
        </p>
        <p>SO LET'S MAKE IT</p>
        <p>
          <span>MEMORABLE..</span>
        </p>
      </div>


      <div className="logo-container">
        
        <div className="logos">
          <div className="popup git-popup">FallenSid</div>
          <img
          id="git"
            src="github.svg"
            alt="can't load"
          />
        </div>
        

        <div className="logos">
          <div className="popup mail-popup">fallensid01@gmail.com</div>
          <img
          id="mail"
            src="mail.svg"
            alt="can't load"
          />
        </div>
        

        <div className="logos">
          <div  className="popup insta-popup">gauravgautam8808</div>
          <img
          id="insta"
            src="insta.svg"
            alt="can't load"
          />
        </div>
        

        <div className="logos">
          <div className="popup tg-popup">unknown9110</div>
          <img
          id="tg"
            src="tg.svg"
            alt="can't load"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Contacts;
