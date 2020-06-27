import React from 'react'
import { Link } from 'react-router-dom'
import SolidButton from '../Shared/SolidButton'
import Figure from 'react-bootstrap/Figure'

const About = () => {
  // const backgroundImageUrl = 'https://media.giphy.com/media/UYBDCJjwOd9Re/giphy.gif'
  const aboutStlyes = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
  const caption = {
    textAlign: 'center'
  }
  const imgStyles = {
    alignItems: 'center',
    margin: '1em'
  }
  return (
    <div className='about' style={aboutStlyes} Style={{ flexDirection: 'column' }}>
      <div className='div-design'>
        <h1>About Rick</h1>
        <p>I have lead a multifaceted life of different interests and careers. I have a BA in Arts Management, studio art, and art history, as well as have worked in non-profits. My desire of information and experiences brought me to computer science at a young age. As a child of engineers, I was raised to ask questions, explore, and create. Coupled with an artistic background, I make for a pretty well rounded individual. I love working with technology, art, and people, which initially brought me to a customer service position after college. Coming back to coding through a software bootcamp after getting my B.A. in Arts Management, Art and Art History, I rekindled my passion for it, easily convincing me I need to be a software engineer above all else.</p>
      </div>
      <div className='div-design'>
        <h2>Skills: Languages, Tools and more</h2>
        <div Style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={100}
              height={100}
              alt="171x180"
              src="https://i.ya-webdesign.com/images/html-5-logo-png-19.png"
            />
            <Figure.Caption style={caption}>
              HTML5
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={171}
              height={180}
              alt="171x180"
              src="https://cdn.freebiesupply.com/logos/thumbs/2x/css3-logo.png"
            />
            <Figure.Caption style={caption}>
              css3
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={171}
              height={180}
              alt="171x180"
              src="https://pluspng.com/img-png/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png"
            />
            <Figure.Caption style={caption}>
              JavaScript
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={100}
              height={100}
              alt="171x180"
              src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/JQuery_logo-512.png"
            />
            <Figure.Caption style={caption}>
              jQuery
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={100}
              height={100}
              alt="171x180"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--98agc3DA--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://cdn.artandlogic.com/wp-content/uploads/2000px-AJAX_logo_by_gengns.svg_.png"
            />
            <Figure.Caption style={caption}>
              Ajax
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={100}
              height={100}
              alt="171x180"
              src="https://images.vexels.com/media/users/3/166485/isolated/preview/d4061b653e6ba02ad0afdc79e0315a25-ruby-programming-language-icon-by-vexels.png"
            />
            <Figure.Caption style={caption}>
              Ruby
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={100}
              height={100}
              alt="171x180"
              src="https://handlebarsjs.com/images/handlebars_logo.png"
            />
            <Figure.Caption style={caption}>
              Handlebars
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={100}
              height={100}
              alt="171x180"
              src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
            />
            <Figure.Caption style={caption}>
              Sass
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={100}
              height={100}
              alt="171x180"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png"
            />
            <Figure.Caption style={caption}>
              Bootstrap
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={100}
              height={100}
              alt="171x180"
              src="https://styled-components.com/atom.png"
            />
            <Figure.Caption style={caption}>
              Styled Components
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={171}
              height={180}
              alt="171x180"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            />
            <Figure.Caption style={caption}>
              React
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={100}
              height={100}
              alt="171x180"
              src="https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png"
            />
            <Figure.Caption style={caption}>
              Heroku
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={171}
              height={180}
              alt="171x180"
              src="https://dwglogo.com/wp-content/uploads/2017/12/MongoDB_logo_01.png"
            />
            <Figure.Caption style={caption}>
              Mongodb
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={100}
              height={100}
              alt="171x180"
              src="https://rubyonrails.org/images/rails-logo.svg"
            />
            <Figure.Caption style={caption}>
              Rails
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={100}
              height={100}
              alt="171x180"
              src="https://www.postgresql.org/media/img/about/press/elephant.png"
            />
            <Figure.Caption style={caption}>
              PostgreSQL
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={171}
              height={180}
              alt="171x180"
              src="https://i.ya-webdesign.com/images/amazon-s3-png-5.png"
            />
            <Figure.Caption style={caption}>
              AWS S3
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={100}
              height={150}
              alt="171x180"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxMDk3LjdweCIgaGVpZ2h0PSIzMzMuMXB4IiB2aWV3Qm94PSIwIDAgMTA5Ny43IDMzMy4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDk3LjcgMzMzLjE7IgoJIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQoJLnN0MXtmaWxsOiNGRjZDMzc7fQo8L3N0eWxlPgo8dGl0bGU+aG9yLXdoaXRlLWxvZ288L3RpdGxlPgo8Zz4KCTxnIGlkPSJMYXllcl8yLTIiPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODYuNyw5LjNDOTkuNy0xLjksMjAuMSw1OS42LDksMTQ2LjZzNTAuMywxNjYuNiwxMzcuMywxNzcuN0MyMzMuMywzMzUuNSwzMTIuOSwyNzQsMzI0LDE4NwoJCQljMC0wLjEsMC0wLjIsMC0wLjJDMzM1LjEsOTkuOCwyNzMuNiwyMC40LDE4Ni43LDkuM3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDE5LjIsMTEzLjdoLTI3LjFjLTEuMy0wLjEtMi42LDAuNC0zLjUsMS4yYy0wLjksMC43LTEuNCwxLjgtMS40LDN2OTZjMCwxLjMsMC44LDIuNiwyLDMuMgoJCQljMi42LDEuNiw1LjksMS42LDguNSwwYzEuMy0wLjYsMi4xLTEuOCwyLjEtMy4ydi0zNy4yaDE4LjZjOC4xLDAuNCwxNi4xLTIuMywyMi40LTcuNWM2LjEtNi4zLDkuMi0xNC45LDguNS0yMy42di0xLjMKCQkJYzAuOC04LjUtMi4xLTE3LTcuOS0yMy4zQzQzNS4xLDExNS44LDQyNy4yLDExMy4yLDQxOS4yLDExMy43eiBNNDM3LjgsMTQ2LjdjMC40LDUuNS0xLjQsMTEtNC45LDE1LjJjLTMuOSwzLjgtOS4xLDUuNy0xNC41LDUuNAoJCQloLTE4LjZ2LTQyLjhoMTguNmM1LjItMC4zLDEwLjMsMS42LDE0LDUuMWMzLjYsNC4yLDUuNCw5LjcsNC45LDE1LjJMNDM3LjgsMTQ2Ljd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTUwMCwxMjAuOGMtNi4xLDYuMy05LjEsMTUtOC40LDIzLjd2NDMuMWMtMC44LDguOCwyLjMsMTcuNCw4LjQsMjMuOGMxMy4zLDEwLjEsMzEuNywxMC4xLDQ1LDAKCQkJYzYuMi02LjMsOS4zLTE1LDguNS0yMy44di00Mi44YzAuOS04LjktMi4yLTE3LjctOC41LTI0LjFDNTMxLjcsMTEwLjcsNTEzLjMsMTEwLjcsNTAwLDEyMC44eiBNNTQxLjQsMTg3LjcKCQkJYzAuNSw1LjYtMS4zLDExLjEtNC45LDE1LjNjLTMuNywzLjYtOC44LDUuNC0xMy45LDUuMWMtMTIuNiwwLTE4LjYtNi45LTE4LjYtMjAuNXYtNDIuOGMwLTEzLjYsNi4yLTIwLjQsMTguNi0yMC40CgkJCWM1LjItMC4zLDEwLjIsMS41LDEzLjksNS4xYzMuNiw0LjIsNS40LDkuNyw0LjksMTUuMlYxODcuN3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjQxLjUsMTYyYy00LjctMi4xLTkuMy00LTEzLjktNS43Yy00LjMtMS40LTguNC0zLjYtMTEuOS02LjVjLTMuMi0yLjYtNC45LTYuNy00LjYtMTAuOAoJCQljLTAuNC00LjUsMS43LTguOCw1LjQtMTEuM2M0LjItMi41LDkuMS0zLjcsMTMuOS0zLjRjNC42LTAuMSw5LjIsMC44LDEzLjQsMi43YzIuMSwxLDQuMiwxLjksNi40LDIuNmMxLjYsMCwzLTAuOSwzLjctMi4zCgkJCWMwLjgtMS4zLDEuNC0yLjgsMS41LTQuM2MwLTIuOS0yLjgtNS4zLTguMi03LjFjLTUuNS0xLjctMTEuMi0yLjYtMTctMi41Yy0zLjcsMC03LjQsMC40LTExLDEuM2MtMy41LDAuOS02LjksMi4yLTEwLDQuMQoJCQljLTMuMywyLTUuOSw0LjktNy42LDguNGMtMiw0LjEtMyw4LjYtMi45LDEzLjJjLTAuMiw1LjYsMS41LDExLjIsNC44LDE1LjdjMy4xLDQsNy4yLDcuMiwxMS45LDkuM2M0LjcsMiw5LjMsMy44LDEzLjksNS41CgkJCWM0LjQsMS42LDguNSw0LjIsMTEuOCw3LjVjMy4zLDMuNSw1LDguMSw0LjgsMTIuOGMwLjQsNS0xLjYsOS45LTUuMywxMy4zYy00LjIsMy4zLTkuNCw0LjgtMTQuNyw0LjVjLTMuNiwwLjEtNy4xLTAuNS0xMC40LTEuOAoJCQljLTIuNS0wLjgtNC44LTIuMi02LjgtNGwtNC41LTQuM2MtMC45LTAuOS0yLjEtMS42LTMuMy0xLjhjLTEuNCwwLjEtMi43LDAuOS0zLjQsMi4xYy0xLDEuMy0xLjYsMi44LTEuNyw0LjVjMCwzLjQsMyw3LDkuMywxMC41CgkJCWM2LjUsMy44LDE0LDUuNywyMS42LDUuNGM4LjMsMC40LDE2LjQtMi4zLDIyLjgtNy41YzYuMS01LjgsOS4yLTE0LDguNi0yMi4zQzY1OC43LDE3OCw2NTIuMiwxNjcsNjQxLjUsMTYyTDY0MS41LDE2MnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzU2LjYsMTEzLjdoLTU4LjRjLTEuMywwLTIuNCwwLjYtMy4yLDEuNmMtMS42LDIuMy0xLjYsNS40LDAsNy43YzAuNywxLDEuOSwxLjYsMy4yLDEuNmgyMy4ydjg5LjMKCQkJYzAsMS4zLDAuNywyLjUsMS44LDMuMmMyLjYsMS42LDUuOSwxLjYsOC41LDBjMS4yLTAuNiwxLjktMS44LDEuOS0zLjJ2LTg5LjNoMjIuOWMxLjMsMC4xLDIuNS0wLjYsMy4yLTEuNwoJCQljMC44LTEuMSwxLjItMi41LDEuMS0zLjljMC0xLjMtMC4zLTIuNi0xLjEtMy43Qzc1OC45LDExNC4zLDc1Ny44LDExMy43LDc1Ni42LDExMy43eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04NzIuMywxMTMuN2MtMy42LDAtNi44LDIuNS05LjMsNy42bC0yMi43LDQzLjFsLTIyLjUtNDMuMWMtMi42LTUuMS01LjgtNy42LTkuMy03LjZIODA2CgkJCWMtMi44LDAuNS00LjcsMy4yLTQuMyw2djk0LjFjMCwxLjQsMC43LDIuNywyLDMuM2MxLjMsMC44LDIuOCwxLjIsNC4zLDEuMWMxLjQsMCwyLjgtMC41LDQtMS4zYzEuMi0wLjYsMS45LTEuOCwxLjktMy4ydi03NS42CgkJCWwyMS43LDQxLjRjMC42LDIsMi4zLDMuNCw0LjQsMy41YzIuMi0wLjEsNC0xLjUsNC43LTMuNWwyMS43LTQwLjd2NzQuOWMwLDEuMywwLjcsMi41LDEuOCwzLjJjMi42LDEuNSw1LjgsMS41LDguNSwwCgkJCWMxLjItMC42LDEuOS0xLjgsMS45LTMuMnYtOTQuM2MwLjEtMC41LDAuMS0xLDAtMS41bDAsMEM4NzcuOSwxMTUuMiw4NzUuMiwxMTMuMiw4NzIuMywxMTMuN3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOTU2LjUsMTEzLjhjLTQuMSwwLTYuNSwxLjQtNy4zLDQuMWwtMjkuNCw5NC41Yy0wLjEsMC40LTAuMSwwLjcsMCwxLjFjMCwxLjYsMC45LDMuMSwyLjMsMy44CgkJCWMxLjUsMC45LDMuMiwxLjQsNC45LDEuNGMxLjksMC4zLDMuOC0wLjksNC40LTIuOGw2LjItMjAuOWgzNy4ybDYuMiwyMC45YzAuNiwxLjgsMi41LDMsNC40LDIuN2MxLjgsMC4xLDMuNy0wLjQsNS4yLTEuNAoJCQljMS40LTAuNiwyLjMtMS45LDIuMy0zLjQgTTk5MywyMTMuNHYtMC41bC0yOS40LTk1Yy0wLjctMi43LTMuMS00LjEtNy4yLTQuMUw5OTMsMjEzLjR6IE05NDAuNCwxODQuOGwxNi01My42bDE2LjEsNTMuNgoJCQlMOTQwLjQsMTg0LjhMOTQwLjQsMTg0Ljh6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEwOTYsMTE0LjdjLTIuNi0xLjUtNS44LTEuNS04LjUsMGMtMS4xLDAuNi0xLjgsMS44LTEuOSwzLjF2NzMuNWwtMzUuNy02OS45Yy0wLjktMi4yLTIuMy00LjItNC01LjkKCQkJYy0xLjQtMS4yLTMuMi0xLjgtNS4xLTEuOGMtNC4xLDAtNiwxLjQtNiw0LjJ2OTZjLTAuMSwxLjMsMC42LDIuNSwxLjgsMy4yYzIuNiwxLjYsNS45LDEuNiw4LjUsMGMxLjEtMC42LDEuOC0xLjksMS44LTMuMlYxNDEKCQkJbDM3LjIsNzIuMWMxLjIsMy4yLDQuMiw1LjMsNy41LDUuNWMxLjUsMCwzLTAuNCw0LjMtMS4yYzEuMS0wLjcsMS44LTEuOSwxLjgtMy4ydi05Ni40QzEwOTcuNywxMTYuNSwxMDk3LjEsMTE1LjQsMTA5NiwxMTQuN3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjYxLjgsODMuN2MtMC45LDAuNC0xLjQsMS41LTEsMi40YzAsMC4xLDAuMSwwLjEsMC4xLDAuMmMxLDIsMC44LDQuNS0wLjcsNi4yYy0wLjcsMC43LTAuOCwxLjktMC4xLDIuNgoJCQljMCwwLDAsMCwwLjEsMC4xYzAuNCwwLjEsMC45LDAuMSwxLjMsMGMwLjUsMCwxLjEtMC4zLDEuNC0wLjdjMi41LTIuOSwzLTcsMS4yLTEwLjRDMjYzLjYsODMuNCwyNjIuNiw4My4yLDI2MS44LDgzLjd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE4Ny43LDEuNEM5Ni41LTEwLjQsMTMuMSw1NC4xLDEuNCwxNDUuM1M1NC4xLDMyMCwxNDUuMywzMzEuN1MzMTkuOSwyNzksMzMxLjcsMTg3LjgKCQkJQzM0My40LDk2LjYsMjc5LDEzLjEsMTg3LjcsMS40QzE4Ny44LDEuNCwxODcuOCwxLjQsMTg3LjcsMS40eiBNMjIyLDEwNS4yYy0zLjEsMC4xLTYsMS4zLTguMiwzLjVMMTUyLDE3MC41bC0xMy4yLTEzLjIKCQkJQzE5OS42LDk2LjYsMjEwLjcsOTYsMjIyLDEwNS4yeiBNMTU0LjUsMTcyLjdsNjEuNi02MS4yYzMuNC0zLjMsOC44LTMuMywxMi4yLDBjMS43LDEuNywyLjYsNCwyLjUsNi4zYy0wLjEsMi40LTEuMSw0LjYtMi45LDYuMgoJCQlsLTY1LjEsNTcuNEwxNTQuNSwxNzIuN3ogTTE1OS4xLDE4MmwtMTUuMywzLjljLTAuMywwLjItMC42LDAuMi0wLjksMGMtMC4yLTAuMy0wLjItMC43LDAtMWw5LjMtOS4zTDE1OS4xLDE4MnogTTEyMC4xLDE3NS42CgkJCWwxNi4zLTE2LjNsMTIuMywxMi42bC0yNy45LDZjLTAuNiwwLjEtMS4yLTAuMy0xLjMtMC45Yy0wLjEtMC40LDAtMC43LDAuMy0xTDEyMC4xLDE3NS42eiBNNjkuNiwyNjAuM2MtMC40LTAuMS0wLjgtMC40LTAuOS0wLjcKCQkJYy0wLjEtMC40LTAuMS0wLjgsMC0xLjFsMTMuMS0xMy4ybDE3LDE2LjlMNjkuNiwyNjAuM3ogTTEwMy4yLDI0Mi44TDEwMy4yLDI0Mi44Yy0xLjMsMC43LTIsMi4xLTEuNywzLjVsMi44LDEyCgkJCWMwLjIsMC44LTAuMiwxLjYtMC44LDJjLTAuNiwwLjUtMS41LDAuNS0yLDBsLTE3LTE3LjVsNTIuMi01Mi4zbDI1LjMtNS40bDEyLjEsMTIuMWMtMjEuNiwxOC00NS40LDMzLjMtNzAuOCw0NS40djAuMkgxMDMuMnoKCQkJIE0xNzYuNiwxOTUuMkwxNjUsMTgzLjZsNjUuMS01Ny4zYzAuNi0wLjUsMS4yLTEuMSwxLjctMS44QzIyOS43LDE0My4xLDIwMy41LDE2OS41LDE3Ni42LDE5NS4yeiBNMjI3LjQsMTA1LjUKCQkJYy05LjctMTAuMS05LjMtMjYuMSwwLjgtMzUuOGM5LjItOC44LDIzLjQtOS40LDMzLjMtMS40bC0yMi40LDIyLjNjLTAuNiwwLjctMC42LDEuNywwLDIuNGwxNy40LDE3LjNjLTkuOCw0LjgtMjEuNiwyLjgtMjkuMi01CgkJCUwyMjcuNCwxMDUuNXogTTI2My4xLDEwNS41Yy0xLjIsMS4xLTIuNCwyLjItMy44LDMuMWwtMTYuNy0xNi43bDIxLjMtMjEuM0MyNzMuMSw4MC41LDI3Mi44LDk1LjksMjYzLjEsMTA1LjV6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="
            />
            <Figure.Caption style={caption}>
              Postman
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={100}
              height={100}
              alt="171x180"
              src="https://gruntjs.com/img/og.png"
            />
            <Figure.Caption style={caption}>
              Grunt
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={100}
              height={100}
              alt="171x180"
              src="https://image.flaticon.com/icons/png/512/25/25231.png"
            />
            <Figure.Caption style={caption}>
              Github
            </Figure.Caption>
          </Figure>
          <Figure style={imgStyles}>
            <Figure.Image
              margin={10}
              width={100}
              height={100}
              alt="171x180"
              src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png"
            />
            <Figure.Caption style={caption}>
              Slack
            </Figure.Caption>
          </Figure>
        </div>
      </div>
      <div className='div-design'>
        <h2>Education</h2>
        <div>
          <div>
            <Figure>
              <Figure.Image
                width={300}
                height={180}
                alt="171x180"
                src="https://ga-core.s3.amazonaws.com/cms/files/files/000/000/886/original/ga-logo-gear.png"
              />
            </Figure>
            <p className='div-design'>February - May 2020</p>
            <p className='div-design'>A 12 Week, 500+ hour software engineering immersive program in Boston, MA, enabling me the training and knowledge of programming from the basics of computer science to the complexity of learning a new language from scratch.</p>
          </div>
          <div>
            <Figure>
              <Figure.Image
                width={300}
                height={180}
                alt="171x180"
                src="https://www.mcla.edu/Assets/MCLA-Files/Administrative-Offices/Marketing-Commun/Mascot/TB-Lion-&-Wordmark.png"
              />
            </Figure>
            <p className='div-design'>August 2015 - May 2019</p>
            <p className='div-design'>Degree in Arts Management, Fine Arts, and Art History from Massachusetts College of Liberal Arts in North Adams, MA. I dedicated my undergraduate degree to something that interested me for my whole life: art. It gave me the knowledge of the nonprofit realm, and gave me many opportunities in arts and more.</p>
          </div>
        </div>
      </div>
      <div className='div-design'>
        <h2>Resume</h2>
        <a href='https://www.linkedin.com/in/rick-wilcoxen/'>LinkedIn</a>
        <Link to='/About'>
          <SolidButton>View Resume PDF</SolidButton>
        </Link>
      </div>
    </div>
  )
}
export default About
