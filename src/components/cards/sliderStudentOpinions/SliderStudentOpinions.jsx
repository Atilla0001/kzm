import Slider from "react-slick";
import './SliderStudentOpinions.scss'
import StudentOpinionsCard from "../studentOpinionsCard/StudentOpinionsCard";
import { useTranslation } from "react-i18next"




const SliderStudentOpinions = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,



    };
    const { t } = useTranslation();

    return (
        <div className="slider-container1 mt-4"  >
            <Slider {...settings} className="slider">

                <div style={{ display: 'inline-block', marginRight: '20px' }} className="divdiv">
                
                    <StudentOpinionsCard
                        img='../src/assets/images/kk.png'
                        name="Kemal Kartal"
                        text={t("text13")} 
                       
                    
                        />
 

                </div>

                <div className="divdiv">
               
                    <StudentOpinionsCard
                        img='../src/assets/images/sy.png'
                        name="Sadik Yilmaz"
                        text={t("text14")} />
                   


                </div>

                <div className="divdiv">
                    
                      <StudentOpinionsCard
                        img='../src/assets/images/sy2.png'
                        name="Salih Yuksel"
                        text={t("text15")} />
                    
                  
                </div>


            </Slider>
        </div>
    )
};


export default SliderStudentOpinions
