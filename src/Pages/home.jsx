import React, { useRef } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import Popover from '@mui/material/Popover';
import './home.css';

function Home() {
  const home = useRef(null);
  const peoplebio = useRef(null);
  const aboutus = useRef(null);
  const end = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="App">
      <section ref={home}>
        <header className="App-header">
          <div className='hamburger'>
            <button className='hamburger-button' aria-describedby={id} onClick={handleClick}>
              <img src="moon.png" alt="moon" width="100" height="100">
              </img>
            </button>
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <div className='menu'>
              <ul>
                <li onClick={() => scrollToSection(home)}>
                  Home
                </li>
                <li onClick={() => scrollToSection(peoplebio)}>
                  People Bio
                </li>
                <li onClick={() => scrollToSection(aboutus)}>
                  About us
                </li>
                <li onClick={() => scrollToSection(end)}>
                  end
                </li>
              </ul>
            </div>
          </Popover>
          <div className='title'>
            STARLIGHT  <br /> STUDIOS
          </div>
        </header>
      </section>
      <body>
        <section ref={aboutus}>
          <MDBRow>
            <MDBCol sm='4'>
              <MDBCard className='mission-card'>
                <MDBCardBody>
                  <MDBCardTitle>Mission</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol sm='4'>
              <MDBCard className='vision-card'>
                <MDBCardBody>
                  <MDBCardTitle>Vision</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol sm='4'>
              <MDBCard className='community-card'>
                <MDBCardBody>
                  <MDBCardTitle>Community</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
        <section className='people-bio-container' ref={peoplebio}>
          <MDBRow>
            <div> <h1> Project Partners </h1></div>
            <MDBCol sm='4'>
              <MDBCard>
                <MDBCardTitle>Mia Thomas</MDBCardTitle>
                <MDBCardImage width={20} height={200} src='https://assets-global.website-files.com/5a6a34c2920f950001f51775/630fce81781bd3820305a5f3_f36773f6.jpeg' alt='...' position='top' />
                <MDBCardBody>
                  <MDBCardText>
                    Some info about her
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardText>
                  Specialties: Voice, 3D Animation
                </MDBCardText>
              </MDBCard>
            </MDBCol>
            <MDBCol sm='4'>
              <MDBCard>
                <MDBCardTitle>Jason Staythom</MDBCardTitle>
                <MDBCardImage width={40} height={200} src='https://resizing.flixster.com/hsUnLWi9kT71UtIIfuIql0-qSHE=/218x280/v2/https://flxt.tmsimg.com/assets/165127_v9_bb.jpg' alt='...' position='top' />
                <MDBCardBody>
                  <MDBCardText>
                    Some info about him
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardText>
                  Specialties: Ads
                </MDBCardText>
              </MDBCard>
            </MDBCol>
            <MDBCol sm='4'>
              <MDBCard>
                <MDBCardTitle>Gal Gadoh</MDBCardTitle>
                <MDBCardImage width={20} height={200} src='https://assets-global.website-files.com/5a6a34c2920f950001f51775/630fce81781bd3820305a5f3_f36773f6.jpeg' alt='...' position='top' />
                <MDBCardBody>
                  <MDBCardText>
                    Some info about her
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardText>
                  Specialties: Music
                </MDBCardText>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
      </body>
      <section ref={end}>
        <footer className='footer'>
          Registered Starlight Studios
        </footer>
      </section>
    </div >
  );
}

export default Home;
