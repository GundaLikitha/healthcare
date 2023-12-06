import React from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";

function Feedback() {
  return( 
    <Container>
        <Row>
          <Col md="7">
            <h1>Feedback</h1>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="Name"
                  placeholder="Enter Name"
                />
              </Form.Group>
               <br/>
               <Form.Group controlId="email">
                <Form.Label>Email <br/></Form.Label>
                <Form.Control
                  name='email'
                  type='email'
                  placeholder='Your Email'
                />
              </Form.Group>
              <br/>
              <Form.Group controlId="feedback">
                <Form.Label>FeedBack</Form.Label>
                <Form.Control
                  type="text"
                  name="feedback"
                  placeholder="Message"
                />
              </Form.Group>
              <Button 
              color="primary"  
            >Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  
}
export default Feedback;