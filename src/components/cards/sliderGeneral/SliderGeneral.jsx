
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardLesson from "../cardLesson/CardLesson";
import './SliderGeneral.scss'
import {useTranslation} from "react-i18next"


function SliderGeneral() {
  const {t} =useTranslation();

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
            infoText= {t("infoText")}
            name='Adem Yılmaz'
            job={t("job")}
            imageSrc="../src/assets/images/imgProfile.png"
            imgPlay="../src/assets/images/imgPlay.png"
            imgcard="../src/assets/images/imgcard.png"
            btnColor='#7f56d9'
            btnText={t("btnText")}

          ></CardLesson>
        </div>
       
        <div>
          <CardLesson
            infoText={t("infoText2")}
            name='Rumeysa Yalçın'
            job={t("job2")}
            imageSrc="../src/assets/images/imgProfile2.png"
            imgPlay="../src/assets/images/imgPlay2.png"
            imgcard="../src/assets/images/imgcard2.png"
            btnColor='##00C1FF'
            btnText={t("btnText2")}

          ></CardLesson>
        </div>

        <div>
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
        </div>
        <div> <CardLesson
          infoText={t("infoText4")}
          name='Recep Aktaş'
          job={t("job4")}
          imageSrc="../src/assets/images/imgProfile4.png"
          imgPlay="../src/assets/images/imgPlay4.png"
          imgcard="../src/assets/images/imgcard4.png"
          btnColor='#24D198'
          btnText={t("btnText4")}

        ></CardLesson></div>
        <div>
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
        </div>
        <div>
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
        </div>

     
      </Slider>
    </div>
  );
}

export default SliderGeneral;

