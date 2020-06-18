import React from 'react'
import { Link } from 'react-router-dom'
import SolidButton from '../Shared/SolidButton'
// import { Image } from 'react-router-dom'

const DevPortfolio = () => {
  // const backgroundImageUrl = 'https://media.giphy.com/media/UYBDCJjwOd9Re/giphy.gif'

  const aboutStyles = {
    /* Center the heading inside the container */
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',

    /* Set background image */
    /* backgroundImage: `url(${backgroundImageUrl})`, */
    /* Covers the entire width of the div */
    backgroundSize: 'repeat',
    /* Center the background */
    backgroundPosition: 'center',

    /* Take up half the viewport's height, (50 out of 100) */
    height: '100vh',

    color: 'black',
    textAlign: 'left'
  }
  return (
    <div style={aboutStyles} className='container' Style={{ flex: 1, flexDirection: 'column' }}>
      <div className=''>
        <h1>About Rick</h1>
        <p>I have lead a multifaceted life of different interests and careers. I have a BA in Arts Management, studio art, and art history, as well as have worked in non-profits. My desire of information and experiences brought me to computer science at a young age. As a child of engineers, I was raised to ask questions, explore, and create. Coupled with an artistic background, I make for a pretty well rounded individual. I love working with technology, art, and people, which initially brought me to a customer service position after college. Coming back to coding through a software bootcamp after getting my B.A. in Arts Management, Art and Art History, I rekindled my passion for it, easily convincing me I need to be a software engineer above all else.</p>
      </div>
      <div>
        <h2>Languages</h2>
        <div className='container' Style={{ flex: 1, flexDirection: 'row' }}>
          <img src='https://images.vexels.com/media/users/3/166485/isolated/preview/d4061b653e6ba02ad0afdc79e0315a25-ruby-programming-language-icon-by-vexels.png' style={{ width: 50, height: 50 }} />
        </div>
        <h2>Front End</h2>
        <div className='container' Style={{ flex: 1, flexDirection: 'row' }}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' style={{ width: 70 }} />
        </div>
        <h2>Backend, Databases, APIs, Tools and more</h2>
        <div className='container' Style={{ flex: 1, flexDirection: 'row' }}>
          <img src='https://i.ya-webdesign.com/images/amazon-s3-png-5.png' style={{ width: 90 }} />
        </div>
      </div>
      <div>
        <h2>Education</h2>
        <ul>
          <li>General Assembly Software Engineer Fellow</li>
          <li>BA in Arts Management, Art, Art History from MCLA 2019</li>
        </ul>
      </div>
      <div>
        <h2>Resume</h2>
        <a href='https://www.linkedin.com/in/rick-wilcoxen/'>LinkedIn</a>
        <Link to='/About'>
          <SolidButton>View Resume PDF</SolidButton>
        </Link>
      </div>
    </div>
  )
}
export default DevPortfolio
