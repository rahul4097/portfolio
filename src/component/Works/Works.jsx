import React from 'react'
import './works.css'
import project1 from '../../assets/weatherForecasting.png'
import project2 from '../../assets/twitterClone.png'
import project3 from '../../assets/todolist.png'
import project4 from '../../assets/LMS.png'
// import project5 from '../../assets/works5.png'


const Works = () => {
  return (
    <section id='works' >
        <h2 className="worksTitle">My Projects</h2>
        <span className="worksDec">Welcome to my project portfolio, where innovation meets execution! Below is a snapshot of some of my recent projects:</span>
        <div className="worksImgs">
           <a href="https://weather-forecast-by-rahul.netlify.app/"><img src={project1} alt="" className="worksImg" /></a>
           <a href="https://twitterbyme.netlify.app/"><img src={project2} alt="" className="worksImg" /></a>
           <a href="https://to-do-list4097.netlify.app/"><img src={project3} alt="" className="worksImg" /></a>
           <a href=""><img src={project4} alt="" className="worksImg" /></a>
           {/* <a href=""><img src={project5} alt="" className="worksImg" /></a> */}
        </div>
        <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works