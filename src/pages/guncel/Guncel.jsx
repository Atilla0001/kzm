import MyNavbar from "../../components/navbar/MyNavbar"
import FontHead from "../../components/fontHead/FontHead"
import MainFooter from '../../components/mainFooter/MainFooter'
import CardBlog from "../../components/cards/cardBlogGuncel/CardBlog"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Guncel.scss'
import { useTranslation } from "react-i18next";


const Guncel = () => {
  const {t} = useTranslation();
  return (
    <div>
      <MyNavbar></MyNavbar>
      <FontHead page={`${t("guncel")}`}></FontHead>




      <Container>
        <Row style={{ paddingTop: '5%' }}>
          <Col><CardBlog
            title={ `${t("guncel2")}`}
            content={`${t("guncel3")}` }
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
