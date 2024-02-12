import React from 'react'
import './intro.css'
import bg from '../../assets/rahul.png'
import { Link } from 'react-scroll'
import btnImg from '../../assets/cv.png'
const Intro = () => {

  const onButtonClick = () => {
    const pdfUrl = "http://localhost:5173/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <section id='intro' >
        <div className="introContent"> 
        <span className="hello">Hello</span>
        <span className="introText">I'm <span className="introName">Rahul</span> <br />Full-Stack Developer</span>
        <p className="introPara">Welcome to my portfolio! I'm thrilled to have you here as I <br /> share with you a glimpse into my journey, passion, and expertise.</p>
        <Link><button className="btn" onClick={onButtonClick}><img src={btnImg} alt="HIRE-ME" className='btnImg'/>Download my CV</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
    )
}

export default Intro