import react ,{Component} from "react";
import {Card,Row,Form,Button,Badge,Accordion,InputGroup,FormControl,Col,ProgressBar} from "react-bootstrap";
import "./Particpants.css";
import { faUpload,faVideo,faInfo,faThumbsUp,faComment,faShare,faImage,faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../../image/default.jpg";


const ChatMessage=(props)=>{
    return(
    
       <p className="chat" style={{marginBottom: 0}}  >
        
        <Card>
  <Card.Header as="h5"> 
  <Row style={{margin:"1%"}}><ReactRoundedImage  image={MyPhoto} imageWidth="50"
          imageHeight="50" />

           <Card.Text style={{marginTop:"1%",marginLeft:'2%'}}>
              Kanishk
              <footer className="blockquote-footer">
          {props.timestamp} 01/01/2021
       
      </footer>
    </Card.Text></Row>
   
         
          </Card.Header>
         
  <Card.Body>
  <Card.Title>{props.message}</Card.Title>
     <Card.Footer> <Badge style={{margin:"1%"}} pill variant="info">
    100 Likes
  </Badge>
  <Badge style={{margin:"1%"}} pill variant="info">
    10 Comments
  </Badge></Card.Footer >
  
  <Accordion defaultActiveKey="0" >
  <Card>
    <Card.Header>
    <Button className="buttonss" variant="outline-secondary"><FontAwesomeIcon icon={faThumbsUp}/> </Button>
    <Button className="buttonss" variant="outline-secondary"><FontAwesomeIcon icon={faShare}/> </Button>
  

      <Accordion.Toggle as={Button} variant="link" eventKey="0" >
  <Button className="buttonss" variant="outline-secondary"><FontAwesomeIcon icon={faComment}/> </Button>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
       <>
       <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-sm">Your Comment</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
   <InputGroup.Append> <Button variant="outline-secondary">Add +</Button></InputGroup.Append>
  </InputGroup>
    <Card className="marginp">
  <Card.Header as="h5">
     <Row style={{margin:"1%"}}><ReactRoundedImage  image={MyPhoto} imageWidth="50"
          imageHeight="50" />

           <Card.Text style={{marginTop:"1%",marginLeft:'2%'}}>
              Jhon
              <footer className="blockquote-footer">
          {props.timestamp} 01/01/2021
       
      </footer>
    </Card.Text>
   
    </Row>
    <Col><Button className='jcl' variant="primary">Add Reply</Button></Col>
    
   </Card.Header>
  <Card.Body>
   
    <Card.Text>
     Very Good
    </Card.Text>
   
  </Card.Body>
</Card>
<Card className="marginp">
  <Card.Header as="h5"><Row style={{margin:"1%"}}><ReactRoundedImage  image={MyPhoto} imageWidth="50"
          imageHeight="50" />

           <Card.Text style={{marginTop:"1%",marginLeft:'2%'}}>
              Jhon
              <footer className="blockquote-footer">
          {props.timestamp} 01/01/2021
       
      </footer>
    </Card.Text></Row>
    <Col><Button className='jcl' variant="primary">Add Reply</Button></Col>
   </Card.Header>
  <Card.Body>
   
    <Card.Text>
     Very Good
    </Card.Text>
   
  </Card.Body>
</Card>
<Card className="marginp">
  <Card.Header as="h5"><Row style={{margin:"1%"}}><ReactRoundedImage  image={MyPhoto} imageWidth="50"
          imageHeight="50" />

           <Card.Text style={{marginTop:"1%",marginLeft:'2%'}}>
              Jhon
              <footer className="blockquote-footer">
          {props.timestamp} 01/01/2021
       
      </footer>
    </Card.Text></Row>
    <Col><Button className='jcl' variant="primary">Add Reply</Button></Col>
   </Card.Header>
  <Card.Body>
   
    <Card.Text>
     Very Good
    </Card.Text>
   
  </Card.Body>
</Card>
</>
    </Accordion.Collapse>
  </Card>
  <Card>
   
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
  
   
  </Card.Body>
</Card>
          
         
        
      
       <small></small></p>
    );
 };
 const ChatMessageHistory=(props)=>{      
    var createMessage = function(message, index) {
       var liStyles = {
          backgroundColor: ( index % 2 == 1 ) ? '#ddd' : '#efefef',
          padding: '1rem',
          borderBottom: '1px solid #ddd'
       };
       
       return (<li style={liStyles}><ChatMessage message={message.message} id={index} timestamp={message.timestamp} /></li>);
    };
       var ulStyles = {
        listStyle: 'none',
        margin: 0,
        padding: 0
     };
     
     return (<ul style={ulStyles}>{props.messages.map(createMessage)}</ul>);
  
    }
export default class Participants extends Component
{
    state = {
        messages: [
            { message: 'Hi Josh', timestamp: 'Tuesday' },
            { message: 'How are you?', timestamp: 'Wednesday' }                                    
         ],
        inputText: ''
    }
    
    
      
               
  
     handleSubmit=(e)=>{
        e.preventDefault();
        var nextMessages = this.state.messages.concat([{ message: this.state.inputText, timestamp: 'Thursday' }]);
        var nextInputText = '';
        this.setState({ messages: nextMessages, inputText: nextInputText });
     }
     onChange(e) {
        this.setState({inputText: e.target.value});
     }
     render()
     {
        var windowStyles = {
            width:"100%",
            height:"600px",
            margin: '1rem auto',
            overflow:"scroll"
         };
         
         var formStyles = {
            display: 'flex',
         };
         var inputStyles2 = {
            flex: '1 auto',
            width:"97%",
            
  
            
         };
         var inputStyles = {
            flex: '1 auto',
            width:"87%",
            borderWidth:"0px",
            border:"none",
            outline:"none",
  
            
         };
         
         var btnStyles = {
            backgroundColor: '#00d8ff',
            border: 'none',
            color: '#336699',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontWeight: 'bold',
            fontSize: '0.8em'
         };
         
         return (
            <>
            <Card className="cardd">
            <Card.Body style={{width:"100%"}}> 
            <div >
          <div>
               <form style={formStyles} onSubmit={this.handleSubmit}>
                  <div style={inputStyles2} className="inpuut">
                  <FontAwesomeIcon  style={{color:"#0069d9",height:20,width:30}} icon={faEdit}/><input style={inputStyles} type="text" onChange={(e)=>{
        this.setState({inputText: e.target.value});
     }} value={this.state.inputText} placeholder={"What On Your Mind"} />
         
                  </div>
                 
               </form>
               </div>
               <div className="buttons">
               <Button variant="outline-primary" onClick={this.handleSubmit}><FontAwesomeIcon icon={faImage}/> Photo</Button>{' '}
               <Button variant="outline-primary" className="buttons_width"><FontAwesomeIcon icon={faVideo}/> Video </Button>{' '}
               
               </div>
               </div>
        
               </Card.Body>
               
          </Card>
          <hr class="solid"></hr>
            <div style={windowStyles} className="ss">
           
               <ChatMessageHistory messages={this.state.messages} />
               
            </div>
       
            </>
         );
      }
}