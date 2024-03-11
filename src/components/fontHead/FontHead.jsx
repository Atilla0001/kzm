import { Container } from "react-bootstrap"
import "./FontHead.scss"
import  PropTypes  from "prop-types"
import { useTranslation } from "react-i18next"


const FontHead = (props) => {
  const { t } = useTranslation();

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
        <Container id="cont" >
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src="../src/assets/images/rectangleBg.png" alt="" id="img" />
        <h3>{props.page}</h3>
        <p style={{whiteSpace:"-moz-pre-wrap"}}>{t("titleHome")} / {props.page} </p>
      </div>

    </Container>

    </div>
  

  )
};
FontHead.propTypes={
  page: PropTypes.string,
};

export default FontHead

