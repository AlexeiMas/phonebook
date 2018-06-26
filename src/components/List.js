import React, {Component} from 'react'
import Contact from "./Contact";
import "./list.css"

export default class List extends Component{
    state = {
        search: ''
    };

    updateSearch = event => {
        this.setState({search: event.target.value})
    };

    eachContact = (contact, index) => {
        return(
            <Contact key={index}
                     contact={contact}
                     isOpen={this.state.contactId === index}
                     index={index}
                     delCont={this.props.delCont}
                     updCont={this.props.updCont}
            />
        )
    };

    render() {
        const arr = this.props.data;
        const contactNodes = arr.filter(
            (data) => {
                const fullData = data.name.toLowerCase()+
                    data.number.toLowerCase()+
                    data.company.toLowerCase()+
                    data.email.toLowerCase();

                return fullData.indexOf(
                    this.state.search.toLowerCase()) !== -1;
            }
            );

        const list = contactNodes.map(this.eachContact);
        return (
            <div className="List">
                <div className="search col align-self-center">
                    <br/>
                    <h2>
                        <input type="text"
                           className="search_input"
                           value={this.state.search}
                           onChange={this.updateSearch}
                           placeholder="Enter data for searching..."/>
                    </h2>
                </div>
                <table className='table table-bordered'>
                  <thead className="thead-light">
                    <tr className='row' style={{margin: "0"}}>
                        <th className='col-1'>#</th>
                        <th className="col-3">Name</th>
                        <th className="col-2">Number</th>
                        <th className="col-2">Company</th>
                        <th className="col-2">E-mail</th>
                        <th className="col-2">Properties</th>
                    </tr>
                  </thead>
                </table>
                <table className='table table-bordered' style={{marginBottom: '0'}}>
                    <tbody>
                        {list}
                    </tbody>
                </table>
            </div>
        )
    }
}