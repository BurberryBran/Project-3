import React, {Component} from 'react'
import API from '../utils/API'

export default class About extends Component{

    componentDidMount(){
       API.Logout().then(data=>{
           window.location.href="/About"
       })
    }
    render (){
        return (
            <div> 
                About
            </div>
        )
    }
}