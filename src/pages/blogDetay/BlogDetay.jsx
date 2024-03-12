import MyNavbar from "../../components/navbar/MyNavbar"
import FontHead from '../../components/fontHead/FontHead'
import MainFooter from '../../components/mainFooter/MainFooter'
import "./BlogDetay.scss"
import { useTranslation } from "react-i18next"



const BlogDetay = () => {

    const {t}= useTranslation();
     return (
        <div>
            <MyNavbar />
            <FontHead page={`${t("bdetay")}`}></FontHead>
            <div >
                <div className="Container003 my-4 ">
                    <img src="../../src/assets/images/zz.png" alt="" id="imgg" />
                    <div>
                        <div style={{display:"flex",justifyContent:"center"}} className="my-3"> <h1> {t("bdetay2")}</h1></div>
                       
                        <h4>{t("bdetay1")} </h4>
                        <p>{t("bdetay3")}
                        </p>
                        <h4>{t("bdetay4")}</h4>
                        <p>
                        {t("bdetay5")}
                        </p>
                        <h4>{t("bdetay6")}</h4>

                        <p>
                        {t("bdetay7")}
                           </p>
                        <h4>{t("bdetay8")}  </h4>
                        <p>
                        {t("bdetay9")} 
                            </p>
                        <h4>  {t("bdetay10")}</h4>
                        <p>  {t("bdetay11")} </p>
                        <h4>{t("bdetay12")} </h4>
                        <p>
                        {t("bdetay13")}
                           </p>
                    </div>

                </div>
            </div>



            <MainFooter visibility={'hidden'} ></MainFooter>
        </div>
    )
}

export default BlogDetay
