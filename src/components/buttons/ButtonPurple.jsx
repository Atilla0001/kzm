import Button from 'react-bootstrap/Button';
import "./buttonPurple.scss"
import PropTypes from 'prop-types'; 


const ButtonPurple = ( props ) => {
  return (
    <>  
    <Button  id='primaryButton' size='sm' style={{backgroundColor: props.btnColor }} >
    {props.buttonText}
  </Button>
  
  </>
       
  )
}
ButtonPurple.propTypes = {
  buttonText: PropTypes.string.isRequired,
  btnColor: PropTypes.any,
  
};
export default ButtonPurple;
