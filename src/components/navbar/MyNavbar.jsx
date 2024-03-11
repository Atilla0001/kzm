import './Navbar.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonPurple from '../buttons/ButtonPurple';
import { NavLink, Link } from 'react-router-dom'
/* import {useHistory} from 'react-router-dom' */
import { useTranslation } from "react-i18next"
import Dropdown from 'react-bootstrap/Dropdown';
import { TfiWorld } from "react-icons/tfi";

const MyNavbar = () => {

  const { t, i18n } = useTranslation();

  const clickHandle = async lang => {
    await i18n.changeLanguage(lang)
  }

  return (

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary " id='Navbar'>
      <Container fluid id='container'>
        <NavLink to="/">
          <img src="../src/assets/images/logo.png" alt="logo" id='logo'
          />
        </NavLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >

          <Nav className="me-auto" id='buttons'>

            <Link to="/" id='button1' >{t('Home')}</Link>
            <NavLink to="/kurumsal" id='button1'>{t('Kurumsal')} </NavLink>
            <NavLink to="/ekitap" id='button1'>{t('ebook')}</NavLink>
            <NavLink to="/egitimler" id='button1'>{t('education')}</NavLink>
            <NavLink to="/guncel" id='button1'>{t('news')}</NavLink>
            <NavLink to="/blog" id='button1'>{t('blog')}</NavLink>
            <NavLink to="/iletisim" id='button1'>{t('contact')}</NavLink>

          </Nav>


          <div>
            <Dropdown data-bs-theme="light" >
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="transparent" >
                <TfiWorld />
              </Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item href="" >
                  {t('ActiveLanguage')} : {i18n.language}
                </Dropdown.Item>
                <Dropdown.Divider />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <button onClick={() => clickHandle('tr')} style={{ border: "none" }}>Türkçe</button>

                  <button onClick={() => clickHandle('en')} style={{ border: "none" }} className="mt-2">English</button>

                  <button onClick={() => clickHandle('ar')} style={{ border: "none" }} className="mt-2">عربي</button>


                </div>

              </Dropdown.Menu>
            </Dropdown>
          </div>



          <Nav>
            <Container style={{ display: "flex", justifyContent: "start" }}>
              <NavLink id='buttonLog'>{t('login')}</NavLink>
              <NavLink id='buttonLog' className='ayrac'>/</NavLink>
              <NavLink id='buttonLog'>{t('signup')}</NavLink>
            </Container>
          </Nav>
          <div className='pt-2'>
            <ButtonPurple id='buttonPurple' buttonText={t('btn')}  > </ButtonPurple>

          </div>










        </Navbar.Collapse>
      </Container>

    </Navbar>

  )
}

export default MyNavbar
