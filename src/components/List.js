import React, {Component} from 'react'
// import Contact from "./Contact";

class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: '',
            edit: false
        }
    }

    updateSearch(event) {
        this.setState({
            search: event.target.value
        })
    }

    render (){
        const contactNodes = this.props.data.filter(
            (data) => {
                const fullData = data.name.toLowerCase()+
                    data.number.toLowerCase()+
                    data.company.toLowerCase()+
                    data.email.toLowerCase();

                return fullData.indexOf(
                    this.state.search.toLowerCase()) !== -1;
            }
        );
        const list = contactNodes.map(function(contact, index) {
            return(
                <div key={index+1}>
                 <table className='table'>

                     <tbody>
                     <tr>
                         <td>{index+1}</td>
                         <td><h2 className="contact-name">{contact.name}</h2></td>
                         <td><p className="contact-number">{contact.number}</p></td>
                         <td><p className="contact-company">{contact.company}</p></td>
                         <td><p className="contact-email">{contact.email}</p></td>
                         <td><button>Edit</button><button>Remove</button></td>
                 </tr>
                     </tbody>
                 </table>
                </div>
            )
        });
        return (
            <div className="List">
                <div className="search col align-self-center">
                    <br/><h2><input type="text"
                           className="search_input"
                           value={this.state.search}
                           onChange={this.updateSearch.bind(this)}
                           placeholder="Enter data for searching..."/>
                    </h2>
                </div>
                {list}
            </div>
        )
    }
}

export default List;