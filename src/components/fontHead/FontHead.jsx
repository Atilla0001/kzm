import { Container } from "react-bootstrap"
import "./FontHead.scss"
import  PropTypes  from "prop-types"


const FontHead = (props) => {
  return (

    <Container id="cont" >
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src="../src/assets/images/rectangleBg.png" alt="" id="img" />
        <h3>{props.page}</h3>
        <p style={{whiteSpace:"-moz-pre-wrap"}}>Anasayfa / {props.page}</p>
      </div>

    </Container>


  )
};
FontHead.propTypes={
  page: PropTypes.string,
};

export default FontHead

