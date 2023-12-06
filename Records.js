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

function Records() {

    
  return( 
    <Container>
        <Row>
          <Col md="7">
            <h1>Add Your Health Report</h1>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="Name"
                  placeholder="Enter Name"
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
                  placeholder="Enter Hospital Name"
                />
              </Form.Group>

              <Form.Group controlId="file">
                <Form.Label>Upload Your Report</Form.Label>
                
                <Form.Control
                  type="file"
                  name="file"
                  placeholder="Upload Your Report"
                />
              </Form.Group>
              <br/>
              <Form.Group controlId="problem">
                <Form.Label>Health problem</Form.Label>
                <Form.Control
                  type="text"
                  name="Healthproblem"
                  placeholder="Enter Health Problem"
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
              <Button 
              color="primary"  
            >Add</Button>


            </Form>
            
          </Col>
        </Row>
      </Container>
    );
  
}
export default Records;