import React, {Component} from 'react'

class Contact extends Component{
    render (){
        return(
            <div className="contact">
                <h2>{this.props.name}</h2>
                <p>{this.props.number}</p>
                <p>{this.props.company}</p>
                <p>{this.props.email}</p>
            </div>
        )
    }
}

export default Contact;