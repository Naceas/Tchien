import React from 'react'
import {MDBCol, MDBContainer} from 'mdbreact'
import "../assets/css/Header.css"
export default class Header extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <MDBContainer fluid className="header">
                <img src={require("../assets/img/TchienLogo.gif")} width="100"/>
            </MDBContainer>
        )
    }


}
