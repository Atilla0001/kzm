import MyNavbar from "../../components/navbar/MyNavbar"
import FontHead from '../../components/fontHead/FontHead'
import CardLesson from "../../components/cards/cardLesson/CardLesson"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Egitimler.scss'


const Egitimler = () => {
  return (
    <div>
       <MyNavbar/>
      <FontHead page={'Eğitimler'}></FontHead>


<div style={{display:'flex', justifyContent:'center', paddingTop:'3%', }}>
     <ButtonGroup aria-label="Basic example" >
      <Button className="buttonx" >Tümü</Button>
      <Button className="buttonx" >Bilişim Teknolojileri</Button>
      <Button className="buttonx" >El Sanatları</Button>
      <Button className="buttonx" >Resim</Button>
      <Button className="buttonx" >Din ve Değerler Eğitimi</Button>
      <Button className="buttonx" >Spor</Button>
      <Button className="buttonx" >Yabancı Diller</Button>
      <Button className="buttonx" >Kişisel Gelişim</Button>
    </ButtonGroup>
</div>
     





      <Container id='cards'>
          <Row id='cards1'  style={{paddingTop:'3%'}}>
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
                btnColor='##00C1FF'
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
          <Row id='cards2' style={{paddingTop:'3%'}}>
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


        <div style={{height:'300px'}}></div>
    </div>
  )
}

export default Egitimler;







