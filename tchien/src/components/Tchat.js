import React from 'react'
import Header from './Header'
import Body from './Body'
export default class Tchat extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div>
                <Header/>
                <Body/>
            </div>
        )
    }
}