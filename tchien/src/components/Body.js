import React from 'react';
import {MDBInput, MDBRow, MDBBtn, MDBContainer} from 'mdbreact'
import "../assets/css/Body.css"

import io from 'socket.io-client'

export default class Body extends React.Component{
    constructor(props){
        super(props)

        this.state={
            connected:false
        }
    }


    
    
    render(){
         
        var socket = io('http://10.35.12.168:8080');
	        socket.on('message', function (message) {
		    document.getElementById('messages').append("\n" +  message);
	    });

	function send(message = document.getElementById('message').value) {
		socket.emit('message', message);
		let messageElement = document.createElement('span');
		messageElement.style.backgroundColor = 'red';
		messageElement.textContent = message;
		document.getElementById('messages').appendChild(messageElement);
	}
        return(
            <div>
                <MDBContainer  fluid >
                    <div className="discussion" id="messages"></div>
                </MDBContainer>
                
                <MDBContainer fluid className="message-box">
                    <MDBRow className="rowToBeAlgined">
                        <input id="message" size="lg" placeholder="ton -Wouaf-ssage ici !" />
                        <MDBBtn className="sendBouton" onClick={()=>send()} >Envoyer</MDBBtn>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }

   
}