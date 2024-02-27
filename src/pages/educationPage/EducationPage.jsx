import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import MainFooter from '../../components/mainFooter/MainFooter'
import Row from 'react-bootstrap/Row';

import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import "./EducationPage.scss"
const EducationPage = () => {



    return (
        <>
            {/*        ___________________________________ navbar_________________________________________________
 */}

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid id='navcon'>
                    <Navbar.Brand href="">
                        <img src="../src/assets/images/logo.png" alt="" id='logoBel' />
                        <img src="../src/assets/images/lineVertical.png" alt="" id='lineVertical' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Col>
                                <p id='title001'>Excell Eğitimi</p>
                                <p id='title002'>-Arayüz İnceleme</p>

                            </Col>


                        </Nav>
                    </Navbar.Collapse>



                    <Container style={{ width: 85, height: 70, paddingRight: '10px' }}>
                        <CircularProgressbarWithChildren value={66}>

                            <img style={{ width: 60, }} src="../src/assets/images/starr.png" alt="doge" />

                        </CircularProgressbarWithChildren>
                    </Container>


                    <NavDropdown title="İlerleme Durmunuz" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">btn1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            btn2
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">btn3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            btn4
                        </NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar>

            {/* ________________________________________-video_______________________________________ */}

            <div style={{ height: "500px" }}></div>

            <Container fluid style={{ maxWidth: "98%" }}>
                <Row>
                    <Col md={6}>
                        <h4>Eğitim Açıklaması</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.
                            Risus commodo viverra maecenas accumsan lacus vel facilisis
                            consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                            maecenas accumsan lacus vel facilisis consectetur adipiscing elit.</p>
                        <h4>Sertifika</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                            accumsan lacus vel facilisis consectetur adipiscing elit.</p>
                        <h4>Bu eğitim kimler içindir?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis consectetur
                            adipiscing elit.</p>
                        <h4>Bu eğitimde neler öğreneceksiniz?</h4>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        </ul>
                    </Col>
                    <Col md={3}></Col>
                    <Col md={3}>
                        <Container id='contSag'>
                           <div>
                                     <p>55555555</p>
                                    <p>55555555</p>
                                    <p>55555555</p>
                                    <p>55555555</p>
                                    <p>55555555</p>
                                    <p>55555555</p>
                                    <p>55555555</p>
                                    <p>55555555</p>

                           </div>
                           <div>
                                     <p>55555555</p>
                                    <p>55555555</p>
                                    <p>55555555</p>
                                    <p>55555555</p>
                                    <p>55555555</p>
                                    <p>55555555</p>
                                    <p>55555555</p>
                                    <p>55555555</p>

                           </div>
                        </Container>

                    </Col>
                </Row>

            </Container>





















            <MainFooter visibility={"hidden"} />
        </>
    )
}

export default EducationPage
