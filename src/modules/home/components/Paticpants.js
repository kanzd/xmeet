import react ,{Component} from "react";
import {Card,Row,Form,Button} from "react-bootstrap";
import "./Particpants.css";
import { faUpload,faVideo,faInfo,faThumbsUp,faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChatMessage=(props)=>{
    return(
    
       <p className="chat" style={{marginBottom: 0}}  onMouseOver={(e)=>{
          
         document.getElementById(props.id).style.display="block";
         document.getElementById(props.id).style.animation="fade_in_show 0.5s";
       }} onMouseOut={(e)=>{
        
         document.getElementById(props.id).style.display="none";
         document.getElementById(props.id).style.animation="";
       }}>
        
          <Row >
          <div style={{marginLeft:"1%"}}>{props.message} </div>
          <div className="hide" id={props.id} > 
             <FontAwesomeIcon className="hideIcon" height={430} icon={faThumbsUp}></FontAwesomeIcon>
          <FontAwesomeIcon className="hideIcon" height={420} icon={faComment}></FontAwesomeIcon></div>
         
          </Row>
          <br/>
      
       <small>{props.timestamp}</small></p>
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
            height:"410px",
            margin: '1rem auto',
            overflow:"scroll"
         };
         
         var formStyles = {
            display: 'flex',
         };
         
         var inputStyles = {
            flex: '1 auto',
            
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
                  <input className="inpuut" style={inputStyles} type="text" onChange={(e)=>{
        this.setState({inputText: e.target.value});
     }} value={this.state.inputText} placeholder={"What On Your Mind"} />
         
               </form>
               </div>
               <div className="buttons">
               <Button variant="outline-success" onClick={this.handleSubmit}><FontAwesomeIcon icon={faUpload}/> Post</Button>{' '}
               <Button variant="outline-warning" className="buttons_width"><FontAwesomeIcon icon={faVideo}/> Get Live</Button>{' '}
               <Button variant="outline-info" className="buttons_width"><FontAwesomeIcon icon={faInfo}/> Event</Button>{' '}
               </div>
               </div>
               </Card.Body>
          </Card>
           
            <div style={windowStyles}>
              
               <ChatMessageHistory messages={this.state.messages} />
               
            </div>
            </>
         );
      }
}