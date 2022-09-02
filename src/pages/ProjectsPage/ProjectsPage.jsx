import React from 'react';
import './index.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ParkMate from '../../images/ParkMate.png'
import Lighthouse from '../../images/Lighthouse.png'
import MoneyManager from '../../images/MoneyManager.png'

const ProjectsPage = () => {
  return (
    <div>
      <Header />
        <div className='projects-container'>

          <h1>Projects</h1>

          <Project 
          img={ParkMate} 
          name="ParkMate - SYNCS HACK 2022" 
          date="Aug, 2022"
          info="ParkMate is a website that provides the ‘search and book’ function of the available listed car spots. The owners of parking lots can register their spaces through ParkMate to get potential rental deals and the estimated rental value of the area in real time. The match function allows the flexibility in finding a car space available in drivers’ preferred schedules (i.e., every Monday, Tuesday and Friday), in response to change of work mode."
          link="https://devpost.com/software/parkmate-gq7r2k"
          />

          <Project 
          img={Lighthouse} 
          name="Lighthouse - UNSW CSESoc Annual Flagship Hackathon (1st runner up)" 
          date="July, 2022"
          info="Lighthouse is a product that filters posts from various social media platforms into a single, easily read feed."
          link="https://github.com/2022hackathon/hackathon-project"
          />

          <Project 
          img={MoneyManager} 
          name="Money Manager - Personal Project" 
          date="Feb, 2022"
          info="Money Manager is built by python. Users can record all of their expenses and income and export it to MS Excel."
          link="https://github.com/mck-jacky/Money-Manager"
          />

        </div>
      <Footer />
    </div>
  )
}

const Project = ({img, name, date, info, link}) => {
  return (
    <div className='project-item'>
      <img className='project-item-image' src={img} alt="ParkMate"/>
      <div className='project-item-description'>
        <div className='title'>{name}</div>
        <div className='date'>{date}</div>
        <div className='info'>{info}</div>
        <a className='link' href={link}>See more</a>
      </div>
      
    </div>
  )
}

export default ProjectsPage