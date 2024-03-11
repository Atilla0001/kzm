import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import CardCatagories from '../cardCatagories/CardCatagories';
import "./cardSlider.scss"
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next"



const MySlider = () => {
  const { t } = useTranslation();
  const photoList = [
    { path: "../src/assets/images/it.png", name: `${t("a1")}`  },
    { path: "../src/assets/images/art.png", name: `${t("a2")}` },
    { path: "../src/assets/images/handcrafts.png", name: `${t("a3")}` },
    { path: "../src/assets/images/Religion.png", name: `${t("a4")}` },
    { path: "../src/assets/images/Languages.png", name: `${t("a5")}` },
    { path: "../src/assets/images/spor.png", name: `${t("a6")}` },
    { path: "../src/assets/images/it.png", name: 'Bilişim Teknolojileri' },
    { path: "../src/assets/images/art.png", name: 'Resim' },
    { path: "../src/assets/images/handcrafts.png", name: 'El Sanatları' },
    { path: "../src/assets/images/Religion.png", name: 'Din ve Değerler Eğitimi' },
    { path: "../src/assets/images/Languages.png", name: 'Yabancı Diller' },
    { path: "../src/assets/images/spor.png", name: 'Spor' },
  ];

  const [slidesPerView, setSlidesPerView] = useState(6);
  /* const [isSwiping, setIsSwiping] = useState(false); */

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width < 700) {
        setSlidesPerView(1);
      } else if (width < 800) {
        setSlidesPerView(2);
      } else if (width < 1000) {
        setSlidesPerView(3);
      } else if (width < 1400) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(6);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 /*  function handleSlideChange() {
    setIsSwiping(true);
  }

  function handleSwiperTransitionEnd() {
    setIsSwiping(false);
  } */

  return (
    <div> 
      <Swiper 
        className="swiper_container" 
        slidesPerView={slidesPerView} 
        grid={{ rows: 1 }} 
        spaceBetween={30} 
        pagination={{ clickable: true }} 
/*         onSlideChange={handleSlideChange}
        onTransitionEnd={handleSwiperTransitionEnd} */
      >
        {photoList.map((el, index) => (
          <SwiperSlide key={index} className="photo_slide">
            <div className="photo_section">
              <CardCatagories text={el.name} img={el.path} ></CardCatagories>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
   {/*    <Container className='mt-5 contDot'>       
        <img src="../src/assets/images/dots.png" alt="" id='dot' className={isSwiping ? 'flip' : ''}/>
      </Container> */}
    </div>
  );
};

export default MySlider;
