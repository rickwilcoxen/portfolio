import React from 'react'
import { Link } from 'react-router-dom'
import SolidButton from '../Shared/SolidButton'

const Home = () => {
  const backgroundImageUrl = 'https://i.imgur.com/M2dC8Yt.jpg'

  const homeStyles = {
    /* Center the heading inside the container */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    /* Set background image */
    backgroundImage: `url(${backgroundImageUrl})`,
    /* Covers the entire width of the div */
    backgroundSize: 'cover',
    /* Center the background */
    backgroundPosition: 'center',

    /* Take up half the viewport's height, (50 out of 100) */
    height: '100vh',

    color: 'White',
    textAlign: 'center'
  }
  return (
    <div style={homeStyles}>
      <div>
        <h1>RJW Portfolio</h1>
        <Link to='/About'>
          <SolidButton>About Rick</SolidButton>
        </Link>
        <SolidButton>Art Portfolio</SolidButton>
        <SolidButton>Software Dev</SolidButton>
      </div>
    </div>
  )
}
export default Home
