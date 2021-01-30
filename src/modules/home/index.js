import react, { Component } from "react";
import DarkTheme, { createTheme } from 'react-dark-theme';
import { Navbar, Nav, Form, FormControl, Button, Row, Col, Container, Card, ListGroup, Jumbotron, Image, Carousel, Tab, Tabs} from "react-bootstrap";
import "./index.css";
import Participants from "./components/Paticpants";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../image/default.jpg";
import { faJoint,faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default class index extends Component {
  state = {};
  lightTheme = {
    background: 'white',
    text: 'black',
  }
  darkTheme = {
    background: 'grey',
    text: 'white',
  }
  myTheme = createTheme(this.darkTheme, this.lightTheme);
  render() {
    return (
      <div style={{ backgroundColor: this.myTheme.background, color: this.myTheme.text }}>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">XMeet</Navbar.Brand>
          <Nav className="mr-auto">

          </Nav>
          <DarkTheme light={this.lightTheme} dark={this.darkTheme} />

        </Navbar>

        <Row>
          <Col className="sid">
            <div className="xpand">
              <Row className="py-1 px-4">

                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.pixabay.com/photo/2020/10/18/11/01/deer-5664424_1280.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.pixabay.com/photo/2020/10/18/11/01/deer-5664424_1280.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.pixabay.com/photo/2020/10/18/11/01/deer-5664424_1280.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>

              </Row>
              <Row className="py-1 px-2">
                <Col>
                  <video width="350" height="140" controls>
                    <source src="movie.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="madouter">
            <Row className="center">
              <Card fulid className="text-center mad">


                <Card.Body>

                  <Button variant="primary" className="mx-2"><FontAwesomeIcon icon={faJoint}/> JOIN</Button>
                  <input className="mx-1" type="datetime-local" name="date" id="date" placeholder="Enter Date and Time" required="" readOnly />

                  <Button variant="primary" className="mx-2"><FontAwesomeIcon icon={faCalendar}/> Add to Calender</Button>

                </Card.Body>


              </Card>
            </Row>
            <Row>
              <Participants />
            </Row>
          </Col>
          <div className="rig">
            <Col >
              {/* <Card style={{ width: '18rem' }}>
  <Card.Header>Meeting scheduled</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item></ListGroup.Item>
    <ListGroup.Item></ListGroup.Item>
    <ListGroup.Item></ListGroup.Item>
  </ListGroup>
</Card> */}
              <Nav justify variant="tabs" >
              

              <Nav.Item>
    <h3>X Chat</h3>
  </Nav.Item>
              </Nav>
              <ListGroup className="pp">
                <Row className="fulltile"><ReactRoundedImage image={MyPhoto} imageWidth="50" imageHeight="50" /> <ListGroup.Item className="tile">Jhon</ListGroup.Item></Row>
                <Row className="fulltile"><ReactRoundedImage image={MyPhoto} imageWidth="50" imageHeight="50" /> <ListGroup.Item className="tile">Rashi</ListGroup.Item></Row>
                <Row className="fulltile"><ReactRoundedImage image={MyPhoto} imageWidth="50" imageHeight="50" /> <ListGroup.Item className="tile">Harsh</ListGroup.Item></Row>
                <Row className="fulltile"><ReactRoundedImage image={MyPhoto} imageWidth="50" imageHeight="50" /> <ListGroup.Item className="tile">Kanishk</ListGroup.Item></Row>

              </ListGroup>
            </Col>
          </div>
        </Row>



      </div>
    );

  }
}