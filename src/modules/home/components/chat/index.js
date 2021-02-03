import react ,{Component} from "react";
import {Card,Row,Form,Button,Fade,Collapse} from "react-bootstrap";
import Chat from "./chatCompo/index";
export default class index extends Component{
    state ={
        open:false,
    };
    render()
    {
        return (
            <div className="all">
             
              {this.state.open?  <Card>
                    
  <Card.Body>
   <Chat className="chatAre"/>
   
  </Card.Body>
</Card>
:<></>}
              
      <Button style={{marginLeft:"80%",marginTop:"3%",borderRadius:"100px",height:"60px"}}
        onClick={() => {this.setState({open:!this.state.open});
    this.props.onchange();
    }}
        aria-controls="example-fade-text"
        aria-expanded={this.state.open}
      >
        Jhon
      </Button>
     
  
</div>
        );
        
    }
}