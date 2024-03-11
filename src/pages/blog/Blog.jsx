import MyNavbar from "../../components/navbar/MyNavbar"
import FontHead from '../../components/fontHead/FontHead'
import MainFooter from '../../components/mainFooter/MainFooter'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardBlog from "../../components/cards/cardBlogGuncel/CardBlog"
import './Blog.scss'
import { useTranslation } from "react-i18next";



const Blog = () => {

  const {t} = useTranslation();
  return (
    <div>
      <MyNavbar />
      <FontHead page={`${t("blog0")}`}></FontHead>
      <div style={{ height: '100px' }}></div>

      <Container>
        <Row>
          <Col><CardBlog
            title={`${t("blog2")}`}
            content={`${t("blog3")}`}
            date={'26.10.2023'}
            img={"src/assets/images/b1.png"}
            page={"/blogdetay"}
          ></CardBlog></Col>
          <Col><CardBlog
            title={`${t("blog4")}`}
            content={`${t("blog5")}`}
            date={'27.10.2023'}
            img={"src/assets/images/b2.png"}
          ></CardBlog></Col>
          <Col><CardBlog
            title={ `${t("blog6")}`}
            content={ `${t("blog7")}`}
            date={'27.10.2023'}
            img={"src/assets/images/b3.png"}
          ></CardBlog></Col>
        </Row>
      </Container>

      <div style={{ height: '500px' }}></div>


      <MainFooter visibility={'hidden'}></MainFooter>
    </div>
  )
}

export default Blog
