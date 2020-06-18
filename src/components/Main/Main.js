import React from 'react'
import { Link } from 'react-router-dom'
import SolidButton from '../Shared/SolidButton'

const Home = () => {
  const backgroundImageUrl = 'https://media.giphy.com/media/tBb19f3bR3ECInPavao/giphy.gif'

  const homeStyles = {
    /* Center the heading inside the container */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    /* Set background image */
    backgroundImage: `url(${backgroundImageUrl})`,
    /* Covers the entire width of the div */
    backgroundSize: 'repeat',
    /* Center the background */
    backgroundPosition: 'center',

    /* Take up half the viewport's height, (50 out of 100) */
    height: '100vh',
    width: '100vw',
    color: 'White',
    textAlign: 'center'
  }
  return (
    <div className="container" style={homeStyles}>
      <div>
        <h1>RJW Portfolio</h1>
        <Link to='/About'>
          <SolidButton>About Rick</SolidButton>
        </Link>
        <Link to='/ArtPortfolio'>
          <SolidButton>Art Portfolio</SolidButton>
        </Link>
        <SolidButton>Software Dev</SolidButton>
      </div>
    </div>
  )
}
export default Home
