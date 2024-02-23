import Card from 'react-bootstrap/Card';
import "./CardLesson.scss"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonPurple from '../../buttons/ButtonPurple';
import PropTypes from 'prop-types';


const CardLesson = ( props ) => {
  const { infoText } = props;
  const fontSize = infoText.length > 37 ? 'smaller' : 'larger';
  return (
    <Card className='card'>
        <Card.Img variant="top" src={props.imgcard} id='img'/>
        <Card.Body>
          <Card.Title id='doubleImg'> 
          <img src={props.imgPlay} alt=''></img>
          <img src='../src/assets/images/voteStars.png' alt=''></img>
            </Card.Title>
          <Card.Text className='info' style={{ fontSize }}>
           {props.infoText}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Container>
      <Row id='rowBelow'>
        <Col xs={6} md={2}>
        <img src={props.imageSrc} alt="" className='imgProfile'></img>
        </Col>
        <Col xs={6} md={6}>
        <p className="text-muted" id='name'>{props.name} </p>
        <p className="text-muted" id='title'>{props.job}</p>

        </Col>
        <Col xs={6} md={4} id='colThird'>
          <ButtonPurple buttonText={props.btnText} btnColor={props.btnColor} style={{padding:''}}></ButtonPurple>
        </Col>
      </Row>
    </Container>
            
        </Card.Footer>
      </Card>
  )
}
CardLesson.propTypes = {
  infoText: PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  job:PropTypes.string.isRequired,
  imageSrc:PropTypes.any.isRequired,
  imgPlay:PropTypes.any.isRequired,
  imgcard:PropTypes.any.isRequired,
  btnColor:PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};
export default CardLesson;
// "../src/assets/images/imgcard.jpg"