import React from 'react';
import { MDBInput, MDBRow, MDBBtn, MDBContainer } from 'mdbreact'
import "../assets/css/Body.css"
import Cookies from 'universal-cookie';
import io from 'socket.io-client'

const cookies = new Cookies();

export default class Body extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            connected: false,
            pseudo: cookies.get('pseudo') || 'Unknown Doggo'
        };

        this.socket = io('http://omega-community.fr:8080');
        this.socket.on('message', data => {
            this.print(data.message, data.pseudo);
        });
    }

    print = (message, pseudo = null) => {
        var messages = document.getElementById('messages');
        var pseudoElement = document.createElement('u');
        var messageElement = document.createElement('span');

        pseudoElement.className = 'coucou';

        var br = document.createElement('br');

        messageElement.textContent = message;
        if (!pseudo) {
            pseudo = this.state.pseudo;
            pseudoElement.style.backgroundColor = '#FFBB33';
        }

        pseudoElement.textContent = pseudo;

        messages.appendChild(pseudoElement);
        messages.append(" : ");
        messages.appendChild(messageElement);
        messages.appendChild(br);
    }

    send = () => {
        let message = document.getElementById('message');

        if (!message.value) {
            return;
        }

        this.socket.emit('message', { "pseudo": this.state.pseudo, "message": message.value });
        this.print(message.value);

        message.value = '';
    }

    render() {
        let self = this;        
        onkeydown = event => {
            if (event.keyCode == 13) {
                self.send();
            }
        }

        return (
            <div>
                <MDBContainer fluid >
                    <div className="discussion" id="messages"></div>
                </MDBContainer>

                <MDBContainer fluid className="message-box">
                    <MDBRow className="rowToBeAlgined">
                        <input id="message" size="lg" placeholder="ton -Wouaf-ssage ici !" />
                        <MDBBtn id="sendButton" onClick={this.send} className="btn btn-dark-green" >Envoyer</MDBBtn>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }


}