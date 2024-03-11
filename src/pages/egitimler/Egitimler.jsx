import MyNavbar from "../../components/navbar/MyNavbar"
import FontHead from '../../components/fontHead/FontHead'
import CardLesson from "../../components/cards/cardLesson/CardLesson"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
/* import ButtonGroup from 'react-bootstrap/ButtonGroup';
 */import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import MainFooter from '../../components/mainFooter/MainFooter'
import './Egitimler.scss'
import { useTranslation } from "react-i18next";


const Egitimler = () => {

const {t} = useTranslation();

  return (
    <div>
      <MyNavbar />
      <FontHead page={`${t("egitimler0")}`}></FontHead>




              
<Container className="containerButtons">
<Button variant="transparent" style={{display:"flex"}} className="buttonx " >
      {t("egitimler")} <Badge bg="secondary" style={{marginLeft:"5px",marginTop:"4px"}} id="number">34</Badge>
    </Button>
<Button variant="transparent" style={{display:"flex",whiteSpace:"nowrap"}} className="buttonx " >
  {t("egitimler2")} <Badge bg="secondary" style={{marginLeft:"5px",marginTop:"4px"}} id="number">9</Badge>
    </Button>
<Button variant="transparent" style={{display:"flex",whiteSpace:"nowrap"}} className="buttonx " >
 {t("egitimler3")} <Badge bg="secondary" style={{marginLeft:"5px",marginTop:"4px"}} id="number">13</Badge>
    </Button>
<Button variant="transparent" style={{display:"flex"}} className="buttonx " >
 {t("egitimler4")}  <Badge bg="secondary" style={{marginLeft:"5px",marginTop:"4px"}} id="number">5</Badge>
    </Button>
<Button variant="transparent" style={{display:"flex",whiteSpace:"nowrap"}} className="buttonx " >
 {t("egitimler5")} <Badge bg="secondary" style={{marginLeft:"5px",marginTop:"4px"}} id="number">2</Badge>
    </Button>
<Button variant="transparent" style={{display:"flex"}} className="buttonx " >
 {t("egitimler6")}  <Badge bg="secondary" style={{marginLeft:"5px",marginTop:"4px"}} id="number">1</Badge>
    </Button>
<Button variant="transparent" style={{display:"flex",whiteSpace:"nowrap"}} className="buttonx " >
 {t("egitimler7")}  <Badge bg="secondary" style={{marginLeft:"5px",marginTop:"4px"}} id="number">3</Badge>
    </Button>
<Button variant="transparent" style={{display:"flex",whiteSpace:"nowrap"}} className="buttonx " >
 {t("egitimler8")} <Badge bg="secondary" style={{marginLeft:"5px",marginTop:"4px"}} id="number">1</Badge>
    </Button>



</Container>




<div id="egitimler2" >
<Container>
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic1">
      {t("egitimler0")}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Button className="buttonx " style={{ display: 'grid', gridTemplateColumns: 'auto auto' }} >Tümü   {t("egitimler")} <div id="number"> 34</div>   </Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Bilişim Teknolojileri {t("egitimler2")} <div id="number">9</div></Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>El Sanatları  {t("egitimler3")} <div id="number">13</div></Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Resim  {t("egitimler4")} <div id="number">5</div></Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Din ve Değerler Eğitimi {t("egitimler5")} <div id="number">2</div></Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Spor {t("egitimler6")}  <div id="number">1</div></Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Yabancı Diller {t("egitimler7")} <div id="number">3</div></Button>
          <Button className="buttonx" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>Kişisel Gelişim {t("egitimler8")} <div id="number">1</div></Button>
      </Dropdown.Menu>
    </Dropdown>
    </Container>
</div>

     



  




      <Container id='cards'>
        <Row id='cards1' style={{ paddingTop: '3%' }}>
          <Col md={4} className='colCardForRes'>
            <CardLesson
              infoText={t("infoText")}
              name='Adem Yılmaz'
              job={t("job")}
              imageSrc="../src/assets/images/imgProfile.png"
              imgPlay="../src/assets/images/imgPlay.png"
              imgcard="../src/assets/images/imgcard.png"
              btnColor='#7f56d9'
              btnText={t("btnText")}

            ></CardLesson>
          </Col>
          <Col md={4} className='colCardForRes'>
            <CardLesson
              infoText={t("infoText2")}
              name='Rumeysa Yalçın'
              job={t("job2")}
              imageSrc="../src/assets/images/imgProfile2.png"
              imgPlay="../src/assets/images/imgPlay2.png"
              imgcard="../src/assets/images/imgcard2.png"
              btnColor='#00C1FF'
              btnText={t("btnText2")}

            ></CardLesson>
          </Col>
          <Col md={4} className='colCardForRes'>
            <CardLesson
              infoText={t("infoText3")}
              name='Tuna Tavus'
              job={t("job3")}
              imageSrc="../src/assets/images/imgProfile3.png"
              imgPlay="../src/assets/images/imgPlay3.png"
              imgcard="../src/assets/images/imgcard3.png"
              btnColor='blue'
              btnText={t("btnText3")}

            ></CardLesson>
          </Col>
        </Row>
        <Row id='cards2' style={{ paddingTop: '3%' }}>
          <Col md={4} className='colCardForRes'>
            <CardLesson
              infoText={t("infoText4")}
              name='Recep Aktaş'
              job={t("job4")}
              imageSrc="../src/assets/images/imgProfile4.png"
              imgPlay="../src/assets/images/imgPlay4.png"
              imgcard="../src/assets/images/imgcard4.png"
              btnColor='#24D198'
              btnText={t("btnText4")}

            ></CardLesson>
          </Col>
          <Col md={4} className='colCardForRes'>
            <CardLesson
              infoText={t("infoText5")}
              name='Kemal Kartal'
              job={t("job5")}
              imageSrc="../src/assets/images/imgProfile5.png"
              imgPlay="../src/assets/images/imgPlay5.png"
              imgcard="../src/assets/images/imgcard5.png"
              btnColor='#7f56d9'
              btnText={t("btnText5")}

            ></CardLesson>
          </Col>
          <Col md={4} className='colCardForRes'>
            <CardLesson
              infoText={t("infoText6")}
              name='Ayşenur Güven'
              job={t("job6")}
              imageSrc="../src/assets/images/imgProfile6.png"
              imgPlay="../src/assets/images/imgPlay6.png"
              imgcard="../src/assets/images/imgcard6.png"
              btnColor='#f15568'
              btnText={t("btnText6")}

            ></CardLesson>

          </Col>
        </Row>
      </Container>


      <div style={{ height: '300px' }}></div>
      <MainFooter  visibility={'hidden'} />
    </div>
  )
}

export default Egitimler;







