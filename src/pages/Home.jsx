import { Container } from 'react-bootstrap';
import MyNavbar from '../components/navbar/MyNavbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
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




const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

        <p id='p1'  >HER ZAMAN, HER YERDE EĞİTİM</p>
        <p id='p2'   >Çevrimdışı eğitimlerle bilgilerinize yenilerini ekleyin</p>

        <InputGroup className="mb-3" id='input'>
          <Form.Control aria-label="Amount (to the nearest dollar)" placeholder="Bir Kurs Ara"
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
              Çevrimiçi Eğitimler
            </Button>
            <Button id='primaryButtons2' size="sm" >
              Video Eğitimler
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
            <Button onClick={prevSlide} id='buttonSlider'><FaArrowLeft /></Button>
          </Col>
          {images.map((image, index) => (
            <Col key={index} className={`text-center ${index === currentIndex ? 'active' : ''}`} id='colKomek'>
              <img src={image} alt={`Slide ${index + 1}`} id='komek' />
            </Col>
          ))}
          <Col className="text-center">
            <Button onClick={nextSlide} id='buttonSlider'> <FaArrowRight /></Button>
          </Col>
        </Row>
      </Container>






      {/* -----------------------------------en populer kurslar--------------------------------- */}

      <Container id='container3' fluid>

        <Row id='row00'>
          <Col >
            <Container id='contText'>
              <p id='text00'>En Populer </p>
              <p id='text02'>Kurslarımız</p>
            </Container>

            <p id='text01'>Online eğitim serilerimizle yeteneklerinizi istediğiniz yerden geliştirin.</p>
          </Col>
          <Col ><img src='../src/assets/images/Polygon4.png' alt='triangle' id='triangle'></img></Col>
          <Col xs lg="2" id='col00'>
            <p id='text02'>Kursları Keşfedin<GoArrowUpRight id='Arrow00' /></p>
          </Col>
        </Row>



        {/* -------------------------------cards--------------------------- */}

        <Container id='cards'>
          <Row id='cards1'>
            <Col className='colCardForRes'>
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
            <Col className='colCardForRes'>
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
            <Col className='colCardForRes'>
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
          <Row id='cards2'>
            <Col className='colCardForRes'>
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
            <Col className='colCardForRes'>
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
            <Col className='colCardForRes'>
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
      </Container>



      {/* ------------------------------Katagorileri kesfedin-------------------------------- */}



      <Container id='containerCatagotires'>
        <Row className="justify-content-md-center">
          <Col xs lg="4"></Col>
          <Col md="6" id='colMiddle'>
            <Col id='rowMiddle'>
              <p id='p1'>Kategorileri </p>
              <p id='p2'>Keşfedin</p>
            </Col>
            <p id='p3'>Kategorilere tıklayın ve tüm kursları keşfedin</p>
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
              <p style={{ whiteSpace: 'pre-wrap' }} id='p11' >Uzaktan </p>
              <p id='p12'>Eğitim</p>
            </div>

            <p id='p13'>Lorem ipsum dolor sit amet consectetur.
              Turpis pharetra malesuada semper sed.
              Sed quam eu euismod eget risus et imperdiet nulla senectus.
              Egestas rhoncus imperdiet pellentesque quam vitae ultrices.
              Feugiat scelerisque duis varius quam sapien pretium egestas.
              Cras et morbi cursus in elit ut donec nibh eget. Leo tristique netus ante quis vitae.
              Aliquam ullamcorper a sed fermentum. Sagittis donec urna.</p>
            <ButtonPurple buttonText='Devamını Oku' btnColor={'7F56D9'}></ButtonPurple>
          </Col>
        </Row>
      </Container>





{/* ---------------------------onerilen kurslarimiz----------------------- */}



<Container>
      <Row className='mt-5 pt-5' >
      <Col xs={6} md={4}>
      <div id='divCourse' className='mt-5'>
              <p style={{ whiteSpace: 'pre-wrap' }} id='p31' >Önerilen </p>
              <p id='p32'>Kurslarımız</p>
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
              <p style={{ whiteSpace: 'pre-wrap' }} id='p31' >Öğrenci  </p>
              <p id='p32'>Görüşleri</p>
              
            </div>
          <div className='title77'><p id='info111'>Öğrencilerimiz bizim hakkımızda ne diyor?</p></div>  
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
