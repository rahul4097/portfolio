import React, { useRef } from "react";
import "./contact.css";
// my education img
import emailjs from "@emailjs/browser";
import project1 from "../../assets/university.jpg";
import project2 from "../../assets/hva.jpg";
import project3 from "../../assets/mensa.webp";
// my Projects snapshot
import contact1 from "../../assets/github.png";
import contact2 from "../../assets/instagram.jpg";
import contact3 from "../../assets/linkedin.png";
import contact4 from "../../assets/twitter.png";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_y1ciwc9", "template_9xhgr1d", form.current, {
        publicKey: "_0iQaqay7mWGGTi34",
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          e.target.reset();
          alert("Email has been sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Education</h1>
        <p className="clientsDec">
          Welcome to my education portfolio, where my academic journey unfolds,
          reflecting my commitment to learning and growth:
        </p>
        <div className="clientImgs">
          <a href="https://gurugramuniversity.ac.in/">
            <img src={project1} alt="" className="clientImg" />{" "}
            <p className="occupation">B.SC(Computer Science)</p>
          </a>
          <a href="https://academy.hyperverge.org/">
            <img src={project2} alt="" className="clientImg" />
            <p className="occupation">Web Development</p>
          </a>
          <a href="https://www.mensaprojectdhruv.in/">
            <img src={project3} alt="" className="clientImg" />
            <p className="occupation">Mensa 6E Scholar</p>
          </a>
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contace Me</h1>
        <span className="contactDec">
          Feel free to reach out to me using any of the methods listed below.
          Whether you have a question, suggestion, or just want to say hello,
          I'm always happy to hear from you!
        </span>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="email"
            name="from_email"
          />
          <textarea
            name="message"
            rows="30"
            placeholder="Your message"
            className="msg"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://github.com/rahul4097">
              <img src={contact1} alt="" className="link" />
            </a>
            <a href="https://www.instagram.com/l_its_me_rahul_l/">
              <img src={contact2} alt="" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/rahul-kumar-907645266/">
              <img src={contact3} alt=" " className="link" />
            </a>
            <a href="https://twitter.com/Rahul40008380">
              <img src={contact4} alt="" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
