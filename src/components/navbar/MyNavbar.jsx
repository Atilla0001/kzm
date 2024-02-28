import './Navbar.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonPurple from '../buttons/ButtonPurple';
import {NavLink,Link} from 'react-router-dom'
/* import {useHistory} from 'react-router-dom' */


const MyNavbar = () => {


  return (
    
  <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary " id='Navbar'>
      <Container fluid id='container'>
        <NavLink  to="/">  
           <img src="../src/assets/images/logo.png" alt="logo" id='logo'
      />
      </NavLink>
     
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto" id='buttons'>

            <Link to="/" id='button1' >Anasayfa</Link>
            <NavLink to="/kurumsal" id='button1'>Kurumsal</NavLink>
            <NavLink to="/ekitap" id='button1'>E-Kitap</NavLink>
            <NavLink to="/egitimler" id='button1'>Eğitimler</NavLink>
            <NavLink  to="/guncel" id='button1'>Güncel</NavLink>
            <NavLink to="/blog" id='button1'>Blog</NavLink>
           <NavLink to="/iletisim" id='button1'>İletişim</NavLink>

          </Nav>
          <Nav>
            <Container style={{display:"flex", justifyContent:"start"}}>
              <NavLink href="#deets" id='buttonLog'>Oturum Aç</NavLink>
            <NavLink href="" id='buttonLog' className='ayrac'>/</NavLink>
            <NavLink href="#deets" id='buttonLog'>Kayıt ol</NavLink>
           </Container>
            
          </Nav>
          <div className='pt-2'>
          <ButtonPurple id='buttonPurple' buttonText="Öğrenci Paneli"  ></ButtonPurple>

          </div>

        </Navbar.Collapse>
          
        
       
      </Container>
      
    </Navbar>
    
  )
}

export default MyNavbar
