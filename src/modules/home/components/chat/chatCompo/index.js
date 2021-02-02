import react ,{Component} from "react";
import {Card,Row,Form,Button,Badge,Accordion,InputGroup,FormControl,Col,ProgressBar} from "react-bootstrap";
import "./index.css";
import { faUpload,faVideo,faInfo,faThumbsUp,faComment,faShare,faImage,faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const ChatMessage=(props)=>{
    return(
    
       <p className="chat" style={{marginBottom: 0}}  >
           {props.message}
    </p>
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
            height:"200px",
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
     
            width:"75%",
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
            {/* <Card className="cardd">
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
               
          </Card> */}
          <hr class="solid"></hr>
            <div style={windowStyles} className="ss" >
           
               <ChatMessageHistory messages={this.state.messages} />
              
     
            </div> 
            <div className="in">
            <input style={inputStyles} type="text" onChange={(e)=>{
        this.setState({inputText: e.target.value});
     }} value={this.state.inputText} placeholder={"What On Your Mind"} />
            <Button variant="outline-primary" onClick={this.handleSubmit}>Send</Button>
            </div>
            
       
            </>
         );
      }
}