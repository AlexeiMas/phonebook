import React, {Component} from 'react'
import Contact from "./Contact";

class List extends Component{
    render (){
        const contactNodes = this.props.data.map(function(contact) {
            return(
                <Contact name={contact.name}
                         number={contact.number}
                         company={contact.company}
                         email={contact.email}
                />
            )
        });
        return (
            <div className="List">
                {contactNodes}
            </div>
        )
    }
}

export default List;