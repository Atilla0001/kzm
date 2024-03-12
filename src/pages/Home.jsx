import { Container } from 'react-bootstrap';
import MyNavbar from '../components/navbar/MyNavbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from "react-icons/fa";
/* import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; */
import { GoArrowUpRight } from "react-icons/go";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.scss"
import { useState } from 'react';
import CardLesson from '../components/cards/cardLesson/CardLesson';
import MySlider from '../components/cards/cardCatagoriesSlider/cardSlider';
import ButtonPurple from '../components/buttons/ButtonPurple';
import MainFooter from '../components/mainFooter/MainFooter';
import SliderGeneral from '../components/cards/sliderGeneral/SliderGeneral';
import SliderStudentOpinions from '../components/cards/sliderStudentOpinions/SliderStudentOpinions';
import {useTranslation} from "react-i18next"




const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {t} =useTranslation();

  const images = [
    '../src/assets/images/komek1.png',
    '../src/assets/images/komek2.png',
    '../src/assets/images/komek3.png',
    '../src/assets/images/komek4.png',
  ];

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div>
     
      <MyNavbar />

      {/* --------------------------------------------slogan input-------------------------- */}

      <Container id='container1' >

        <p id='p1'  >{t('slogan')}</p>
        <p id='p2'   > {t('slogan2')}</p>

        <InputGroup className="mb-3" id='input'>
          <Form.Control aria-label="Amount (to the nearest dollar)" placeholder={t("input")}
          />
          <InputGroup.Text>
            <Container> <FaSearch id='iconSearch' /></Container>
          </InputGroup.Text>
        </InputGroup>


        {/*-------------------------------------- iki ok iki buton ana sayfa ---------------------------------*/}
        <Container id='containerBelow'>
          <div id='imageButtonsContainer'>
            <img src='../src/assets/images/Polygon5.png' alt='arrow1' id='arrow1' />
            <Button id='primaryButtons1' size="sm" >
               {t("btn2")}
            </Button>
            <Button id='primaryButtons2' size="sm" >
              {t("btn3")}
            </Button>

            <img src='../src/assets/images/Polygon6.png' alt='arrow2' id='arrow1' />
          </div>
        </Container>
      </Container>




      {/* ------------------------------------kare --------------------------- */}

      <Container id='container2'>
        <Row>
          <Col xs lg="2">
            <img src='../src/assets/images/Group.png' alt='' id='square'></img>
          </Col>
          <Col md="auto">
          </Col>

        </Row>
      </Container>


      {/* -----------------------------------slider komek---------------------------------- */}

      <Container fluid >
        <Row className="align-items-center">
          <Col className="text-center">
            <Button onClick={prevSlide} id='buttonSlider'>{/* <FaArrowLeft /> */}</Button>
          </Col>
          {images.map((image, index) => (
            <Col key={index} className={`text-center ${index === currentIndex ? 'active' : ''}`} id='colKomek'>
              <img src={image} alt={`Slide ${index + 1}`} id='komek' />
            </Col>
          ))}
          <Col className="text-center">
            <Button onClick={nextSlide} id='buttonSlider'> {/* <FaArrowRight /> */}</Button>
          </Col>
        </Row>
      </Container>






      {/* -----------------------------------en populer kurslar--------------------------------- */}

      <Container id='container3' fluid>

        <Row id='row00'>
          <Col >
            <Container id='contText'>
              <p id='text00'> {t("slogan5")}</p>
              <p id='text02'>{t("slogan6")}</p>
            </Container>

            <p id='text01'> {t("slogan7")} </p>
          </Col>
          <Col ><img src='../src/assets/images/Polygon4.png' alt='triangle' id='triangle'></img></Col>
          <Col xs lg="2" id='col00'>
            <p id='text02'>  {t("slogan8")}<GoArrowUpRight id='Arrow00' /></p>
          </Col>
        </Row>



        {/* -------------------------------cards--------------------------- */}

        <Container id='cards'>
          <Row id='cards1'>
            <Col md={4} className='colCardForRes'>
              <CardLesson
                infoText={t("infoText")}
                name="Adem Yılmaz"
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
          <Row id='cards2'>
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
      </Container>



      {/* ------------------------------Katagorileri kesfedin-------------------------------- */}



      <Container id='containerCatagotires'>
        <Row className="justify-content-md-center">
          <Col xs lg="4"></Col>
          <Col md="6" id='colMiddle'>
            <Col id='rowMiddle'>
              <p id='p1'>{t("slogan9")} </p>
              <p id='p2'>{t("slogan10")} </p>
            </Col>
            <p id='p3'>{t("slogan11")} </p>
          </Col>
          <Col xs lg="2">
            <img src="../src/assets/images/ellipse40.png" alt="" id='ellipse40' />
          </Col>
        </Row>



        {/* --------------------------------card slider--------------cardCatagories------------------------ */}

        <MySlider></MySlider>
      </Container>






      {/* -------------------------UZAKTAN EGITIM---------------------- */}


      <Container>
        <Row className='mt-5 pt-5' id='rwOnlineEdu'>
          <Col xs={6} className='col1'>
            <div >
              <div id='divUpper'>
                <img src="../src/assets/images/star.png" alt=" " id='img21' />
                <img src="../src/assets/images/ellipseEmpty.png" alt="" id='img22' />
              </div>

              <img src="../src/assets/images/imgLesson.png" alt="" id='imgLesson' />

              <div id='divBelow'>
                <img src="../src/assets/images/ellipse.png" alt="" id='img23' />
                <img src="../src/assets/images/halfEllipse.png" alt="" id='img24' />
              </div>
            </div>


          </Col>
          <Col xs={6} className='mt-5 pt-5'>
            <div id='divTitle'>
              <p style={{ whiteSpace: 'pre-wrap' }} id='p11' >{t("text")} </p>
              <p id='p12'>{t("text2")} </p>
            </div>

            <p id='p13'>{t("text3")}  </p>
            <ButtonPurple buttonText= {t("text4")}  btnColor={'7F56D9'}></ButtonPurple>
          </Col>
        </Row>
      </Container>





{/* ---------------------------onerilen kurslarimiz----------------------- */}



<Container>
      <Row className='mt-5 pt-5' >
      <Col xs={6} md={4}>
      <div id='divCourse' className='mt-5'>
              <p style={{ whiteSpace: 'pre-wrap' }} id='p31' > {t("text5")} </p>
              <p id='p32'> {t("text6")} </p>
            </div>
        </Col>
        <Col xs={6} md={8}>
           
        </Col>
      </Row>
<SliderGeneral></SliderGeneral>
    </Container>



{/* -------------------------ogrenci gorusleri-------------------------------------- */}


<Container fluid className='ogrGorusleri'>
<Container fluid>
      <Row className='contTitle1'>
       <Col xs={2} md={4}></Col>
        <Col xs={6} md={4} >
      <div id='divCourse' className=' title77 mt-5'>
              <p style={{ whiteSpace: 'pre-wrap' }} id='p31' >{t("text7")}  </p>
              <p id='p32'> {t("text8")}  </p>
              
            </div>
          <div className='title77'><p id='info111'>{t("text9")}  </p></div>  
        </Col>
        <Col xs={6} md={4} id='colYamuh' >
     <img src="../src/assets/images/yamuh.png" alt="" />
        </Col>
      </Row>  
    </Container>

    <SliderStudentOpinions></SliderStudentOpinions>
</Container>




{/* ---------------------------ogrenci gorusleri card slider---------------------------------- */}










{/* _________________________________________footer---------------------------------------------- */}



<MainFooter  ></MainFooter>



    </div>
  )
}

export default Home;
