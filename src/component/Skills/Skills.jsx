import React from 'react'
import './skills.css'
import front_end from '../../assets/frontend.png'
import back_end from '../../assets/backend.png'
import data_base from '../../assets/database.png'
import tools from '../../assets/tools.png'
const Skills = () => {
  return (
    <section id='skills' >
      <span className="skillTitle">My Skills</span>
      <span className="skillDec">Welcome to my skills portfolio, showcasing the expertise I bring to the table. Below are some key skills I possess. Feel free to reach out if you have any inquiries.</span>
      <div className="skillBars">
        <div className="skillBar">
            <img src={front_end} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Front-End</h2>
                <p>HTML, CSS, JavaScript and React.js</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={back_end} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Back-End</h2>
                <p>Node.js, Express.js</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={data_base} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Data-Base</h2>
                <p>MongoDB</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={tools} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Tools</h2>
                <p>Visual Studio and GitHub</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills