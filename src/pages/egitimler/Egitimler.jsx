import MyNavbar from "../../components/navbar/MyNavbar"
import FontHead from '../../components/fontHead/FontHead'
import CardLesson from "../../components/cards/cardLesson/CardLesson"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';



import './Egitimler.scss'


const Egitimler = () => {



  return (
    <div>
      <MyNavbar />
      <FontHead page={'Eğitimler'}></FontHead>




              
<Container className="containerButtons">
<Button variant="primary">
      Profile <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>

          <ButtonGroup aria-label="Basic example" style={{ display: 'flex', alignItems: 'center', }}>
          <Button className="buttonx " style={{ display: 'grid', gridTemplateColumns: 'auto auto' }} >Tümü  <div id="number"> 34</div>   </Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Bilişim Teknolojileri<div id="number">9</div></Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>El Sanatları <div id="number">13</div></Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Resim <div id="number">5</div></Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Din ve Değerler Eğitimi<div id="number">2</div></Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Spor <div id="number">1</div></Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Yabancı Diller<div id="number">3</div></Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Kişisel Gelişim<div id="number">1</div></Button>

        </ButtonGroup>

</Container>




<div id="egitimler2" >
<Container>
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic1">
        Eğitimler
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Button className="buttonx " style={{ display: 'grid', gridTemplateColumns: 'auto auto' }} >Tümü  <div id="number"> 34</div>   </Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Bilişim Teknolojileri<div id="number">9</div></Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>El Sanatları <div id="number">13</div></Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Resim <div id="number">5</div></Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Din ve Değerler Eğitimi<div id="number">2</div></Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Spor <div id="number">1</div></Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Yabancı Diller<div id="number">3</div></Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Kişisel Gelişim<div id="number">1</div></Button>
      </Dropdown.Menu>
    </Dropdown>
    </Container>
</div>

     



  




      <Container id='cards'>
        <Row id='cards1' style={{ paddingTop: '3%' }}>
          <Col md={4} className='colCardForRes'>
            <CardLesson
              infoText='İleri Seviye Excel Eğitimi'
              name='Adem Yılmaz'
              job='Bilgisayar Öğretmeni'
              imageSrc="../src/assets/images/imgProfile.png"
              imgPlay="../src/assets/images/imgPlay.png"
              imgcard="../src/assets/images/imgcard.png"
              btnColor='#7f56d9'
              btnText='B. Teknolojileri'

            ></CardLesson>
          </Col>
          <Col md={4} className='colCardForRes'>
            <CardLesson
              infoText='Kağıt Telkari'
              name='Rumeysa Yalçın'
              job='Sanat Öğretmeni'
              imageSrc="../src/assets/images/imgProfile2.png"
              imgPlay="../src/assets/images/imgPlay2.png"
              imgcard="../src/assets/images/imgcard2.png"
              btnColor='#00C1FF'
              btnText='El Sanatları'

            ></CardLesson>
          </Col>
          <Col md={4} className='colCardForRes'>
            <CardLesson
              infoText='Kardiyo Eğitimi'
              name='Tuna Tavus'
              job='Spor Eğitmeni'
              imageSrc="../src/assets/images/imgProfile3.png"
              imgPlay="../src/assets/images/imgPlay3.png"
              imgcard="../src/assets/images/imgcard3.png"
              btnColor='blue'
              btnText='Spor'

            ></CardLesson>
          </Col>
        </Row>
        <Row id='cards2' style={{ paddingTop: '3%' }}>
          <Col md={4} className='colCardForRes'>
            <CardLesson
              infoText='Sureler - Mealler Eğitimi'
              name='Recep Aktaş'
              job='Din Kültürü Öğretmeni'
              imageSrc="../src/assets/images/imgProfile4.png"
              imgPlay="../src/assets/images/imgPlay4.png"
              imgcard="../src/assets/images/imgcard4.png"
              btnColor='#24D198'
              btnText='Din ve Değerler'

            ></CardLesson>
          </Col>
          <Col md={4} className='colCardForRes'>
            <CardLesson
              infoText='Kodlama Eğitimi'
              name='Kemal Kartal'
              job='Yazılım Uzmanı'
              imageSrc="../src/assets/images/imgProfile5.png"
              imgPlay="../src/assets/images/imgPlay5.png"
              imgcard="../src/assets/images/imgcard5.png"
              btnColor='#7f56d9'
              btnText='B. Teknolojileri'

            ></CardLesson>
          </Col>
          <Col md={4} className='colCardForRes'>
            <CardLesson
              infoText='Dil Bilgisi / Paragraf Yöntemi ve Teknikleri'
              name='Ayşenur Güven'
              job='Kişisel Gelişim Uzmanı'
              imageSrc="../src/assets/images/imgProfile6.png"
              imgPlay="../src/assets/images/imgPlay6.png"
              imgcard="../src/assets/images/imgcard6.png"
              btnColor='#f15568'
              btnText='Kişisel Gelişim'

            ></CardLesson>

          </Col>
        </Row>
      </Container>


      <div style={{ height: '300px' }}></div>
    </div>
  )
}

export default Egitimler;







