import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types'




import Form from 'react-bootstrap/Form';

import "./CardEducationPage.scss"
const educationPageCard = (props) => {
    return (
        <div>
            <Container className='cardContainer mb-3 '>
                <Row  className='rwCard'>
                   
                    <Col xs={3} sm={3}  md={3} lg={3} xl={3} className='cardCol'>
                        <img src="../src/assets/images/vd.png" alt="" className='vdİmg' />
                    </Col>

                    <Col    className='cardCol2'>
                        <p id='p11'>{props.lesson}<p id='p22'>{props.time}</p></p>

                    </Col>

<Container style={{maxWidth:"20px"}} id='cVide'></Container>
                       <Col xs={1}  sm={1}  md={1} lg={1}   xl={2}   className='cardCol3' >
                      
                              <Form>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3" >
                                    <Form.Check
                                        inline
                                        label=""
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                        color='green'
                                    /> 
                                </div>
                            ))}
                        </Form>
                        
                      
                    </Col>



 
                </Row>
            </Container>
        </div>
    )
};
educationPageCard.propTypes = {
    lesson : PropTypes.string.isRequired,
    time: PropTypes.string,
}


export default educationPageCard
