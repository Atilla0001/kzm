import Slider from "react-slick";
import './SliderStudentOpinions.scss'
import StudentOpinionsCard from "../studentOpinionsCard/StudentOpinionsCard";


const SliderStudentOpinions = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,



    };
    return (
        <div className="slider-container1 mt-4"  >
            <Slider {...settings} className="slider">

                <div style={{ display: 'inline-block', marginRight: '20px' }}>
                    <StudentOpinionsCard
                        img='../src/assets/images/kk.png'
                        name="Kemal Kartal"
                        text="Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est 
                    laborum.Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. " />
                </div>

                <div>
                    <StudentOpinionsCard
                        img='../src/assets/images/sy.png'
                        name="Sadik Yilmaz"
                        text="Excepteur sint occaecat cupidatat non proident, 
                     sunt in culpa qui officia deserunt mollit anim id est 
                     laborum.Duis aute irure dolor in reprehenderit in voluptate 
                     velit esse cillum dolore eu fugiat nulla pariatur. " />
                </div>

                <div>
                    <StudentOpinionsCard
                        img='../src/assets/images/sy2.png'
                        name="Salih Yuksel"
                        text="Excepteur sint occaecat cupidatat non proident, 
 sunt in culpa qui officia deserunt mollit anim id est 
 laborum.Duis aute irure dolor in reprehenderit in voluptate 
 velit esse cillum dolore eu fugiat nulla pariatur. " />
                </div>


            </Slider>
        </div>
    )
};


export default SliderStudentOpinions
