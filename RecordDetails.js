import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";

function RecordDetails() {

    
  return( 
    <Container>
        <Row>
          <Col md="7">
            <h1>Your Health Report</h1>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="Name"
                />
              </Form.Group>
               
              <Form.Group controlId="date">
                <Form.Label>Date {' '}</Form.Label>
                
                <Form.Control
                  type="date"
                  name="Date"
                  placeholder="Enter Your Consultation Date"
                  
                />
              </Form.Group>
              <br/>
              <Form.Group controlId="hospitalname">
                <Form.Label>Hospital name</Form.Label>
                <Form.Control
                  type="text"
                  name="Hospitalname"
                />
              </Form.Group>

              <Form.Group controlId="file">
                <Form.Label>Your Report</Form.Label>
                
                <Form.Control
                  type="file"
                  name="file"
                />
              </Form.Group>
              <br/>
              <Form.Group controlId="problem">
                <Form.Label>Health problem</Form.Label>
                <Form.Control
                  type="text"
                  name="Healthproblem"
                />
              </Form.Group>

              <Form.Group controlId="consultation">
                <Form.Label>Consultation</Form.Label>
                <br/>
                  <label>
                  <input
                    type="radio"
                    value="veryGood"
                  />
                  Very Good
                </label>
                <br/>
                <label>
                  <input
                    type="radio"
                    value="Good"
                    
                  />
                  Good
                </label>
                <br/>
                <label>
                  <input
                    type="radio"
                    value="Notbad"
                    
                  />
                  Not Bad
                </label>
                <br/>
                <label>
                  <input
                    type="radio"
                    value="bad"
                  />
                   Bad
                </label>
                <br/>
                <label>
                  <input
                    type="radio"
                    value="verybad"
                  />
                   Very Bad
                </label>
              </Form.Group>


            </Form>
            
          </Col>
        </Row>
      </Container>
    );
  
}
export default RecordDetails;