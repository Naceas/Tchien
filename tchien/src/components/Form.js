import React from 'react';
import '../assets/Form.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = { cookiePseudo: cookies.get('pseudo') ? cookies.get('pseudo') : '' };
	}

	join = () => {
		const { cookiePseudo } = this.state;

		if (!cookiePseudo) {
			console.error('Pseudo empty !');
		} else {
			console.log("Pseudo : " + cookiePseudo);
			cookies.set('pseudo', cookiePseudo);
			window.location.replace('/tchat')
		}
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	render() {
		return (
			<MDBContainer size="sm">
				<MDBRow center>
					<MDBCol md="4" className="MDBCol">
						<h1>TCHIEN</h1>
						<img src="https://cdn.discordapp.com/attachments/664806572622610445/676775967930449940/TchienLogo.gif" alt="Logo Tchien" width="256" />
						<br />
						<input type="text" name="cookiePseudo" className="form-control" placeholder="Pseudo" defaultValue={this.state.cookiePseudo} onChange={this.handleChange} />
						<br />
						<MDBBtn color="orange" onClick={this.join} type="submit">Join</MDBBtn>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		)
	}
}