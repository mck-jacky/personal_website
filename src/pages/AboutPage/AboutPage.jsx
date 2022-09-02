import React from 'react';
import './index.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import icon from '../../images/icon.jpeg'

const AboutPage = () => {
  return (
    <div>
      <Header />

      <div className='about-container'>

        <div className='intro'>
          <div className='greeting'>Hi there!</div>
          <div className='name'>I'm Jacky Ma</div>
        </div>

        <div className='about-container-container'>
          <img className='image' src={icon} alt="icon"/>
          <div className='text'>
            <p>
              I am a second-year Computer Science Student  
            </p>
            <p>
              Being a software engineer is one of my goals in life. I am trying to equip myself as much as possible beofore I grauate. I am seeking every opportunity that allows me to learn, such as applying an internship and being a trainee.
            </p>
            <p>
              I believe working on a project is the most efficient way to learn. Looking forward to working with other amazing people in the trainee program.
            </p>
          </div>
        </div>


      </div>

      <Footer />
    </div>
  )
}

export default AboutPage