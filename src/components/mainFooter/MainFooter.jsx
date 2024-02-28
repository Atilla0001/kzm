
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CiPhone, CiMail, CiLocationOn, CiFacebook } from "react-icons/ci";
import "./MainFooter.scss"
import { RxInstagramLogo } from "react-icons/rx";
import { RiTwitterLine } from "react-icons/ri";
import CardFooter from '../cards/cardFooter/CardFooter';
import PropTypes from 'prop-types'


const MainFooter = (props) => {
  return (
    <div style={{ backgroundColor: '#7F56D9' }}>
<Container fluid className='pt-3 Footer'>

        <Container className='containerCards'>
          <Row className='rowCards'>
           

            <Col xs={6} md={2} >
              <CardFooter id='card' section='../src/assets/images/footerImg.png' number='300' catagorie='Eğitmen'   visibility={props.visibility}></CardFooter>

            </Col>


            <Col xs={6} md={2}>
              <CardFooter id='card' section='../src/assets/images/footerImg2.png' number='20,000+' catagorie='Öğrenci'   visibility={props.visibility}></CardFooter>

            </Col>
            <Col xs={6} md={2}>
              <CardFooter id='card' section='../src/assets/images/footerImg3.png' number='10,000+' catagorie='Video'  visibility={props.visibility}></CardFooter>

            </Col>
            <Col xs={6} md={2}>
              <CardFooter id='card' section='../src/assets/images/footerImg4.png' number='100,000+' catagorie='Kullanıcı'  visibility={props.visibility}></CardFooter>
            </Col>
            
         
          </Row>
        </Container>



        <Row className='mt-5 pt-2  row1'>
          <Col  sm={9} xs={9} md={9} lg={3} style={{ paddingLeft: '0' }} id='collogoFooter'>
            <img src="../src/assets/images/logoFooter.png" alt="" id='logoFooter' />
          </Col>

         

          <Col  sm={4} xs={6} md={4} lg={2} className='colcc'>
            <h4 className='title'>Hızlı Linkler</h4>
            <Col style={{ display: 'flex' }} className='mt-3'>
              <a className='text' href=''>Hakkımızda</a>
              <a className=' text text1' href=''>Blog</a>
            </Col>
            <Col style={{ display: 'flex' }} className='mt-3'>
              <a className='text' href=''>Kurumsal</a>
              <a className='text text1' href=''>Eğitimler</a>
            </Col>
          </Col>




          <Col sm={4} xs={6} md={4}  lg={2}>
            <h4 className='title'>İletişim</h4>
            <Col style={{ display: 'flex' }} className='mt-3'> <CiPhone className='text' /> <p className='text' style={{ whiteSpace: 'pre-wrap' }}>    (505) 555-0104</p>  </Col>
            <Col style={{ display: 'flex' }} className='mt-1'><CiMail className='text' /> <p className='text' style={{ whiteSpace: 'pre-wrap' }}>     info@komek.com.tr</p> </Col>
          </Col>




          <Col sm={4} xs={6} md={3}  lg={2}>
            <h4 className='title'>Adres</h4>
            <Col style={{ display: 'flex' }} className='mt-3'><CiLocationOn className='text' /> <p className='text' style={{ whiteSpace: 'pre-wrap' }}>    Horozluhan, 42120 <br />    Selçuklu/Konya</p> </Col>
          </Col>




          <Col xs={0} md={0}  lg={3}id='colVidee'> </Col>

        </Row>







        <Row id='row2'>
          <hr id='hr' className='mt-5' />
          <div >
            <p >Copyright 2024 | Şehir Teknolojileri Merkezi</p>
            <div>
              <CiFacebook className='socialMedia' />
              <RiTwitterLine className=' socialMedia' />
              <RxInstagramLogo className='socialMedia' />
            </div>
          </div>

        </Row>

      </Container>

    </div>
  )
}
MainFooter.propTypes={
 
  visibility:PropTypes.string
}

export default MainFooter
