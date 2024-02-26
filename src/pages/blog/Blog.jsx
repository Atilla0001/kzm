import MyNavbar from "../../components/navbar/MyNavbar"
import FontHead from '../../components/fontHead/FontHead'
import MainFooter from '../../components/mainFooter/MainFooter'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardBlog from "../../components/cards/cardBlogGuncel/CardBlog"


import './Blog.scss'



const Blog = () => {
  return (
    <div>
      <MyNavbar/>
      <FontHead page={'Blog'}></FontHead>
      <div style={{height:'100px'}}></div>

      <Container>
      <Row>
        <Col><CardBlog 
        title={'Uzaktan Eğitim Nedir?'} 
        content={'Uzaktan Eğitim: Yarının Eğitim Modeli Geleneksel eğitim, fiziksel sınıflar, tahtalar ve kampüslerle özdeşleşirken, teknolojinin hızlı...'}
        date={'26.10.2023'}
img={"src/assets/images/b1.png"}
        ></CardBlog></Col>
        <Col><CardBlog 
        title={'Sıkça Sorulan Sorular'}
        content={'Uzaktan eğitim nedir? - Uzaktan eğitim, öğrencilere derslere internet aracılığıyla erişim sağlayan bir eğitim...'}
        date={'27.10.2023'}
        img={"src/assets/images/b2.png"}
        ></CardBlog></Col>
        <Col><CardBlog
        title={'Seo Nedir?'}
        content={'SEO yani Arama Motoru Optimizasyonu, web sitenizi arama motorlarında daha yüksek sıralara taşımanın bir yoludur....'}
        date={'27.10.2023'}
        img={"src/assets/images/b3.png"}
        ></CardBlog></Col>
      </Row>
    </Container>

<div style={{height:'500px'}}></div>
    

      <MainFooter  visibility={'hidden'}></MainFooter>
    </div>
  )
}

export default Blog
