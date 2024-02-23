
import FontHead from "../components/fontHead/FontHead"
import MyNavbar from "../components/navbar/MyNavbar"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap"
import "./Ekitap.scss"


const Ekitap = () => {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <FontHead page={"E-Kitap"}></FontHead>
      <Container id="allConta" >
        <Row>
          <Col>
            <Container className="containerCard containerCard1">

              <Container className="contİnsideLeft" style={{ background: "#24d198" }}>        
                   <img src="../src/assets/images/i1.png" alt="" id="img" />
              </Container>
              <p style={{left:'9%'}} id="pLeft">Din ve Değerler</p>
            </Container>
          </Col>
          <Col>
            <Container className="containerCard containerCard2">
              <Container className="contİnsideRight" style={{ backgroundColor: "#00c1ff" }}>
                <img src="../src/assets/images/i2.png" alt="" id="img" />
              </Container>
            </Container>
          </Col>
        </Row>

        <Row style={{ marginTop: '1%' }}>
          <Col>
            <Container className="containerCard containerCard3">
              <Container className="contİnsideLeft" style={{ backgroundColor: "#ff6905" }}>
                <img src="../src/assets/images/i3.png" alt="" id="img" />
              </Container>
              <p  style={{left:'10%'}}  id="pLeft">Yabancı Dil</p>
            </Container>
          </Col>
          <Col>
            <Container className="containerCard containerCard4">
              <Container className="contİnsideRight" style={{ backgroundColor: "#dc5348" }}>
                <img src="../src/assets/images/i4.png" alt="" id="img" />
              </Container>
            </Container>
          </Col>
        </Row>

        <Row style={{ marginTop: '1%' }}>
          <Col>
            <Container className="containerCard containerCard5">
              <Container className="contİnsideLeft" style={{ backgroundColor: "#7f56d9" }}>
                <img src="../src/assets/images/i5.png" alt="" id="img" />
              </Container>
              <p  style={{left:'7%'}}  id="pLeft">Bilişim Teknolojileri</p>
            </Container>
          </Col>
          <Col>
            <Container className="containerCard containerCard6">
              <Container className="contİnsideRight" style={{ backgroundColor: "#3d5cff" }}>
                <img src="../src/assets/images/i6.png" alt="" id="img" />
              </Container>
            </Container>
          </Col>
        </Row>



        <Col style={{ height: '150px' }} />
      </Container>
    </div>


  )
}

export default Ekitap