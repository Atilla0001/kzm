import MyNavbar from "../../components/navbar/MyNavbar"
import FontHead from "../../components/fontHead/FontHead"
import MainFooter from '../../components/mainFooter/MainFooter'
import CardBlog from "../../components/cards/cardBlogGuncel/CardBlog"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Guncel.scss'

const Guncel = () => {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <FontHead page={'Güncel'}></FontHead>




      <Container>
        <Row style={{ paddingTop: '5%' }}>
          <Col><CardBlog
            title={'İŞ’TE KOMEK'}
            content={'‘’Her şey Seninle Başlar Eğitim Programı’’ Tüm Eğitim Şube Müdürlüğü çalışanlarının kendini yenilemesi, değişen ve gelişen iletişim yöntemleri konusunda bilgilenmeleri ve iş yaşamında daha verimli olmaları adına “Her şey seninle başlar.” Mottosuyla yola çıkılarak bir eğitim planlaması yapıldı. Eğitim programları sayesinde kurum içindeki ve kurum ile vatandaş arasındaki iletişim daha verimli hale gelmesi amaçlanmıştır... '}
            date={'31.01.2024'}
            img={"src/assets/images/b1.png"}
            page={"/gunceldetay"}
          ></CardBlog></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>


      <div style={{ height: '450px' }}></div>


      <MainFooter  visibility={'hidden'} />
    </div>
  )
}

export default Guncel
