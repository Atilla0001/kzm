import MyNavbar from "../../components/navbar/MyNavbar"
import FontHead from '../../components/fontHead/FontHead'
import MainFooter from '../../components/mainFooter/MainFooter'
import "./GuncelDetay.scss"
import { useTranslation } from "react-i18next"


const GuncelDetay = () => {
const {t} = useTranslation();

  return (
    <div>
    <MyNavbar />
    <FontHead page={`${t("gdetay0")}`}></FontHead>
    <div >
                    <div className="Container003 my-4 ">
        <img src="../../src/assets/images/is.png" alt="" id="imgg" />
<div>
            <h3> {t("gdetay")} </h3>
        <p>
        {t("gdetay2")}
        </p>
</div>

    </div>
    </div>


















    <MainFooter visibility={'hidden'} ></MainFooter>
</div>
  )
}

export default GuncelDetay
