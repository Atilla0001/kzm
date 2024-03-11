import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import MainFooter from '../../components/mainFooter/MainFooter'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ReactPlayer from 'react-player'
import localVideo from "./video3sec.mp4";
import CardEducationPage from '../../components/cards/cardEducationPage/CardEducationPage'



import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import {Link} from 'react-router-dom'
import "./EducationPage.scss"
import { useTranslation } from 'react-i18next';



const EducationPage = () => {

const {t} = useTranslation();

    return (
        <>
            {/*        ___________________________________ navbar_________________________________________________
 */}

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid id='navcon'>
                    <Navbar.Brand href="">
                        <Link to={"/"}>
                        <img src="../src/assets/images/logo.png" alt="" id='logoBel' />
                        </Link>
                        
                        <img src="../src/assets/images/lineVertical.png" alt="" id='lineVertical' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='collapseEdu'>
                        <Nav className="me-auto">
                            <Col>
                                <p id='title001'>{t("excel")}</p>
                                <p id='title002'> {t("excel2")}</p>

                            </Col>


                        </Nav>
                        <div id='divNav'>

                            <Container className='progressCont'>
                                <CircularProgressbarWithChildren value={66}>

                                    <img src="../src/assets/images/starr.png" alt="doge" id='imgStars' />

                                </CircularProgressbarWithChildren>
                            </Container>
                            <NavDropdown title={t("excel3")} id="basic-nav-dropdown" className='pt-3'>
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
                        </div>

                    </Navbar.Collapse>

                </Container>
            </Navbar>

            {/* ________________________________________-video_______________________________________ */}

            <div style={{ padding: "15px 15px", }}>
                <Container fluid style={{ width: '99%', backgroundColor: '#EFEBF5', borderRadius: "20px" }}>
                    <div style={{
                        paddingTop
                            : '15px', display: "flex", flexDirection: "row"
                    }}>
                        <p style={{ fontWeight: "500" }}>{t("excel4")} </p>
                        <p style={{ whiteSpace: "pre", color: "#7f56d9", fontWeight: "500" }}>{t("excel5")}</p>
                    </div>



                    <Container fluid >
                        <Row>
                            <Col sm={12} md={12} lg={12} xl={9} style={{ backgroundColor: "black", height: "auto", padding: "0", maxHeight: "600px" }}>

                                <ReactPlayer
                                    url={localVideo}
                                    width="100%" // Video genişliği
                                    height="auto" // Video yüksekliği
                                    controls={true} // Kontrol düğmelerini göster
                                    playing={true} // Otomatik oynatma
                                    loop={false} // Videoyu döngüye al
                                    muted={false} // Sesi kapat
                                    volume={0.5} // Ses seviyesi
                                    playbackRate={1.0} // Oynatma hızı
                                    pip={true} // Picture-in-picture (PiP) modunu etkinleştir
                                    light={false} // Küçük resim (thumbnail) göster
                                    style={{  }} // Video arka plan rengi
                             

                                />



                            </Col>
                            <Col id='colVideo'>
                                <CardEducationPage lesson={t("excel6")} time={'1:57 '}></CardEducationPage>
                                <CardEducationPage lesson={t("excel7")}  time={'5:43'}></CardEducationPage>
                                <CardEducationPage lesson={t("excel8")} time={"8:11"}></CardEducationPage>
                                <CardEducationPage lesson={t("excel9")} time={"6:10"}></CardEducationPage>
                                <CardEducationPage lesson={t("excel10")} time={"10:00"} ></CardEducationPage>
                                <CardEducationPage lesson={t("excel11")} time={"7:53"} ></CardEducationPage>
                                <CardEducationPage lesson={t("excel12")} time={"10:00"} ></CardEducationPage>
                                <CardEducationPage lesson={t("excel13")}  time={"10:00"} ></CardEducationPage>

                            </Col>
                            <h3 style={{ fontWeight: "700", padding: "20px 0" }}> {t("excel14")} </h3>
                        </Row>
                    </Container>




                </Container>
            </div>


            {/* -----------------------info------------------------- */}


            <Container fluid style={{ maxWidth: "98%", paddingTop: "60px" }}>
                <Row style={{ paddingBottom: '80px', display: "flex", justifyContent: "space-between" }}>
                    <Col md={6} lg={12} xl={9} style={{ maxWidth: "700px" }}>
                        <h4> {t("excel15")} </h4>
                        <p>
                            
                        {t("excel16")}</p>
                        <h4> {t("excel17")} </h4>
                        <p>
                        {t("excel18")} 
                            </p>
                        <h4>{t("excel19")} </h4>
                        <p>{t("excel20")}</p>
                        <h4>  {t("excel21")} </h4>
                        <ul>
                            <li id='list' >{t("excel22")}</li>
                            <li id='list' >{t("excel23")}</li>
                            <li id='list' >{t("excel26")}</li>
                            <li id='list' >{t("excel24")}</li>
                            <li id='list' >{t("excel25")}  </li>
                            
                        </ul>
                    </Col>

                    <Col style={{ maxWidth: "400px" }} >
                        <Container id='contSag' style={{ display: "block" }}>
                            <Container style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className='par'> {t("excel27")}</p>  <p className='par2'>{t("excel28")}</p>
                            </Container>
                            <Container style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className='par'> {t("excel29")}</p> <p className='par2 par3'> {t("excel30")}</p>
                            </Container>
                            <Container style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className='par'> {t("excel31")}</p><img src="../src/assets/images/voteStars.png" alt="" />
                            </Container>
                            <Container style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className='par'> {t("excel32")}</p> <p className='par2'>{t("excel33")}</p>
                            </Container>
                            <Container style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className='par'>{t("excel34")}</p><p className='par2'>30</p>
                            </Container>
                            <Container style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className='par'>{t("excel35")}</p><p className='par2'>5</p>
                            </Container>
                            <Container style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className='par'>{t("excel36")}</p> <p className='par2'>{t("excel37")}</p>
                            </Container>
                            <Container style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className='par'>{t("excel38")}</p> <p className='par2'>{t("excel39")}</p>
                            </Container>

                        </Container>
                        <Button id='primaryButton' size='sm' className='btn11'>  {t("excel40")} </Button>
                    </Col>
                </Row>

            </Container>





















            <MainFooter visibility={"hidden"} />
        </>
    )
}

export default EducationPage
