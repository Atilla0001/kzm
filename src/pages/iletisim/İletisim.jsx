import MyNavbar from "../../components/navbar/MyNavbar"
import FontHead from '../../components/fontHead/FontHead'
import MainFooter from '../../components/mainFooter/MainFooter'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import './İletisim.scss'
import { Captcha } from "../../components/captcha/Captcha";


const İletisim = () => {
    return (
        <div>
            <MyNavbar></MyNavbar>
            <FontHead page={'İletişim'}></FontHead>

            <Container className="mt-5">
                <Row className="rwConta">
                    <Col id="c1" >

                        <iframe
                            title="Google Maps"
                            width="100%"
                            height="120%"
                            frameBorder="0"
                            style={{ border: 0 }}
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1324.2457462393497!2d32.51493682903003!3d37.86953354785069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDUyJzA5LjkiTiAzMsKwMzAnNTMuMyJF!5e0!3m2!1str!2str!4v1708928928373!5m2!1str!2str"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>


                    </Col>

                    <Col id="c2" >
                        <div  id="d2">
                            <h4>Bize Yazın</h4>

                            <Form>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="disabledTextInput0">Adınız</Form.Label>
                                    <Form.Control id="disabledTextInput0" placeholder="" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>E posta adresiniz</Form.Label>
                                    <Form.Control type="email" placeholder="" />

                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="disabledTextInput1">Konu</Form.Label>
                                    <Form.Control id="disabledTextInput1" placeholder="" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Mesajınız</Form.Label>
                                    <Form.Control as="textarea" rows={6} />
                                </Form.Group>

                                <p>Güvenlik Doğrulaması</p>
                                <Captcha > </Captcha>
                            </Form>

                        </div>
                        
                    </Col>

                </Row>
            </Container>

            <Container className="mt-5 pt-5 mb-5 pb-5">
                <Row>
                    <Col sm={12} md={3}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <img src="../src/assets/images/Location.png" alt="" className=" img" />
                            <h4 id="title" style={{ textAlign: 'center' }}>KUZEM - Eğitim Şube Müdürlüğü</h4>
                            <p id="info" style={{ textAlign: 'center' }}>Çimenlik Mahallesi, 8, Mevlana Kültür Mrk.
                                Karatay/KONYA/42030</p>
                        </div>

                    </Col>
                    <Col md={2} style={{ display: 'flex', alignItems: 'center' }} id="line">
                        <img src="../src/assets/images/line.png" alt="" style={{ width: '80%', height: '8px' }} id="line" />
                    </Col>
                    <Col sm={12} md={2}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <img src="../src/assets/images/Call.png" alt="" className=" img" />
                            <h4 id="title" style={{ textAlign: 'center' }}>Telefon</h4>
                            <p id="info" style={{ textAlign: 'center' }}>444 55 42 - 4091-4092</p>
                        </div>

                    </Col>
                    <Col md={2} style={{ display: 'flex', alignItems: 'center' }} id="line">
                        <img src="../src/assets/images/line.png" alt="" style={{ width: '80%', height: '8px' }} id="line" />
                    </Col>
                    <Col sm={12} md={2}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <img src="../src/assets/images/Message.png" alt="" className="img" />
                            <h4 id="title" style={{ textAlign: 'center' }}>E posta Adresi</h4>
                         
                            <p id="info" style={{ textAlign: 'center' }}> bilgi@kuzem.org</p>
                            
                        </div>
                    </Col>


                </Row>
            </Container>









            <MainFooter visibility={'hidden'}></MainFooter>
        </div>
    )
}

export default İletisim
