
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardLesson from "../cardLesson/CardLesson";
import './SliderGeneral.scss'


function SliderGeneral() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // Bu noktayı ihtiyacınıza göre ayarlayın
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container mt-4" >
      <Slider {...settings}>
      
        <div style={{ display: 'inline-block' }}>
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
        </div>
       
        <div>
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
        </div>

        <div>
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
        </div>
        <div> <CardLesson
          infoText='Sureler - Mealler Eğitimi'
          name='Recep Aktaş'
          job='Din Kültürü Öğretmeni'
          imageSrc="../src/assets/images/imgProfile4.png"
          imgPlay="../src/assets/images/imgPlay4.png"
          imgcard="../src/assets/images/imgcard4.png"
          btnColor='#24D198'
          btnText='Din ve Değerler'

        ></CardLesson></div>
        <div>
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
        </div>
        <div>
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
        </div>

     
      </Slider>
    </div>
  );
}

export default SliderGeneral;

