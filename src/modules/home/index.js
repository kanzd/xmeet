import react, { Component } from "react";
import DarkTheme, { createTheme } from 'react-dark-theme';
import { Navbar, Nav, Form, FormControl, Button, Row, Col, Container, Card, ListGroup, Jumbotron, Image, Carousel, Tab, Tabs,Table,Badge} from "react-bootstrap";
import "./index.css";
import Participants from "./components/Paticpants";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../image/default.jpg";
import { faJoint,faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chat from "./components/chat/index";

export default class index extends Component {
  state = {
    chatsOpened:[],
  };
  
  render() {
    return (
      <div >
     
      
        <Row>
          <Col className="sid">
          <Card className="my-2 mx-2">
          <Card.Header style={{fontSize:"20px"}}>Event Name</Card.Header>
  <Card.Body>
 
  <div className="xpand">
              <Row className="px-3">

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
              <Row className="py-2">
                <Col>
                  <video width="330" height="140" controls>
                    <source src="movie.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
                </Col>

              </Row>
              <Row>
              <Card className="text-center mx-3 my-2 w-100">
 
 <Card.Body>
   <Card.Title>Event Discription</Card.Title>
   <Card.Text>
     
   </Card.Text>
  
 </Card.Body>

</Card>
<Card style={{width:"100%"}} className="text-center mx-3 my-2">
 
  <Card.Body>
   
    <Card.Text>
     <Row><Table  hover>
  <thead>
    <tr>
      
      <th>Host</th>
      <th>Date</th>
      <th>Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
   
  </tbody>
</Table></Row >
    </Card.Text>
    <Row className="mx-2 sidebuttonss">
    <Badge pill variant="primary" className="mx-2 buttonsbor">
    JOIN
  </Badge>
  <Badge pill variant="primary" className="mx-2 buttonsbor">
  Add to Calender
  </Badge>
  
   </Row>
    
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
              </Row>
            </div>
  </Card.Body>
</Card>
            
          </Col>
          <Col className="madouter">
          
             
            
            <Row className="mx-2 my-2 ">
              <Participants />
            </Row>
          </Col>
          <div className="rig my-2 mx-2">
          <Card>
  
  <Card.Body>
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
              <Form.Group controlId="formBasicEmail">
   
    <Form.Control type="text" placeholder="Search Message" />
    
  </Form.Group>

  </Nav.Item>
              </Nav>
              <ListGroup className="pp">
                <Row className="fulltile" onClick={(e)=>{
                var Chats = this.state.chatsOpened;
                Chats.push({
                  name:"kanishk",
                  openend:false,

                });
                this.setState({chatsOpened:Chats});
                }}><ReactRoundedImage image={MyPhoto} imageWidth="50" imageHeight="50" /> <ListGroup.Item className="tile">Jhon</ListGroup.Item></Row>
                <Row className="fulltile" onClick={(e)=>{
                var Chats = this.state.chatsOpened;
                Chats.push({
                  name:"kanishk",
                  openend:false,
                  
                });
                this.setState({chatsOpened:Chats});
                }}><ReactRoundedImage image={MyPhoto} imageWidth="50" imageHeight="50" /> <ListGroup.Item className="tile">Rashi</ListGroup.Item></Row>
                <Row className="fulltile" onClick={(e)=>{
                var Chats = this.state.chatsOpened;
                Chats.push({
                  name:"kanishk",
                  openend:false,
                  
                });
                this.setState({chatsOpened:Chats});
                }}><ReactRoundedImage image={MyPhoto} imageWidth="50" imageHeight="50" /> <ListGroup.Item className="tile">Harsh</ListGroup.Item></Row>
                <Row className="fulltile" onClick={(e)=>{
                var Chats = this.state.chatsOpened;
                Chats.push({
                  name:"kanishk",
                  openend:false,
                  
                });
                this.setState({chatsOpened:Chats});
                }}><ReactRoundedImage image={MyPhoto} imageWidth="50" imageHeight="50" /> <ListGroup.Item className="tile">Kanishk</ListGroup.Item></Row>

              </ListGroup>
            </Col>
  </Card.Body>
</Card>
           
          </div>
         
        </Row>
       {this.state.chatsOpened.map((value,index)=>(<div  style={
          {
   width: "25%",
 float:"left",

   position: "fixed",
   
 
   left: `${(75-(index*4))}%`,
   top: `${this.state.chatsOpened[index].openend?"47":"90"}%`,
 }}> <Chat onchange={()=>{
   var chat = this.state.chatsOpened;
   chat[index].openend=!chat[index].openend;
   this.setState({chatsOpened:chat});
 }}/></div>))}
      
       

      </div>
    );

  }
}