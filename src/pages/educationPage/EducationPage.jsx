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
const EducationPage = () => {



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
                                <p id='title001'>Excell Eğitimi</p>
                                <p id='title002'>-Arayüz İnceleme</p>

                            </Col>


                        </Nav>
                        <div id='divNav'>

                            <Container className='progressCont'>
                                <CircularProgressbarWithChildren value={66}>

                                    <img src="../src/assets/images/starr.png" alt="doge" id='imgStars' />

                                </CircularProgressbarWithChildren>
                            </Container>
                            <NavDropdown title="İlerleme Durmunuz" id="basic-nav-dropdown" className='pt-3'>
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
                        <p style={{ fontWeight: "500" }}>Anasayfa | Eğitimler |</p>
                        <p style={{ whiteSpace: "pre", color: "#7f56d9", fontWeight: "500" }}> Excell Eğitimi</p>
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
                                <CardEducationPage lesson='Giriş - Excell Nedir?' time={'1:57 '}></CardEducationPage>
                                <CardEducationPage lesson='Arayüz İnceleme' time={'5:43'}></CardEducationPage>
                                <CardEducationPage lesson='Satırlar ve Sütunlar' time={"8:11"}></CardEducationPage>
                                <CardEducationPage lesson='Veri Girişi' time={"6:10"}></CardEducationPage>
                                <CardEducationPage lesson='Formüller' time={"10:00"} ></CardEducationPage>
                                <CardEducationPage lesson='Düşeyara' time={"7:53"} ></CardEducationPage>
                                <CardEducationPage lesson='Ekle-Çıkar' time={"10:00"} ></CardEducationPage>
                                <CardEducationPage lesson='Format Biçimlendir' time={"10:00"} ></CardEducationPage>

                            </Col>
                            <h3 style={{ fontWeight: "700", padding: "20px 0" }}>Excell Eğitimi - Arayüz İnceleme</h3>
                        </Row>
                    </Container>




                </Container>
            </div>


            {/* -----------------------info------------------------- */}


            <Container fluid style={{ maxWidth: "98%", paddingTop: "60px" }}>
                <Row style={{ paddingBottom: '80px', display: "flex", justifyContent: "space-between" }}>
                    <Col md={6} lg={12} xl={9} style={{ maxWidth: "700px" }}>
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
                            <li id='list' >Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li id='list' >Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li id='list' >Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li id='list' >Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li id='list' >Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        </ul>
                    </Col>

                    <Col style={{ maxWidth: "400px" }} >
                        <Container id='contSag' style={{ display: "block" }}>
                            <Container style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className='par'>Kategori</p>  <p className='par2'>B.Teknolojileri</p>
                            </Container>
                            <Container style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className='par'>Eğitmen</p> <p className='par2 par3'>Adem Yılmaz</p>
                            </Container>
                            <Container style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className='par'>Puan</p><img src="../src/assets/images/voteStars.png" alt="" />
                            </Container>
                            <Container style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className='par'>Süre</p> <p className='par2'>30 Saat</p>
                            </Container>
                            <Container style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className='par'>Ders Sayısı</p><p className='par2'>30</p>
                            </Container>
                            <Container style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className='par'>Testler</p><p className='par2'>5</p>
                            </Container>
                            <Container style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className='par'>Sertifika</p> <p className='par2'>Var</p>
                            </Container>
                            <Container style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className='par'>Dil</p> <p className='par2'>Türkçe</p>
                            </Container>

                        </Container>
                        <Button id='primaryButton' size='sm' className='btn11'>Eğitime Puan Ver  </Button>
                    </Col>
                </Row>

            </Container>





















            <MainFooter visibility={"hidden"} />
        </>
    )
}

export default EducationPage
