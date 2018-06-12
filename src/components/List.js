import React, {Component} from 'react'
// import Contact from "./Contact";
import "./list.css"

class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: '',
            edit: false
        };
    }

    updateSearch(event) {
        this.setState({
            search: event.target.value
        })
    }

    edit(){
        this.setState({edit: true});
        console.log("lose")
    }

    save(){
        this.setState({edit: false})
    }

    rendNorm(contact, index){
        return(
            <div key={index+1}>
                {/*First way with component Contact*/}
                {/*<Contact name={contact.name}*/}
                {/*number={contact.number}*/}
                {/*company={contact.company}*/}
                {/*email={contact.email}*/}
                {/*/>*/}
                {/*Second without Contact.js*/}
                <table className='table table-bordered' style={{marginBottom: '0'}}>
                    <tbody>
                    <tr className='row' style={{margin: "0"}}>
                        <th className='col-1'>{index+1}</th>
                        <td className="contact-name col-3"><h2 >{contact.name}</h2></td>
                        <td className="contact-number col-2"><p >{contact.number}</p></td>
                        <td className="contact-company col-2"><p >{contact.company}</p></td>
                        <td className="contact-email col-2"><p >{contact.email}</p></td>
                        <td className="col-2">
                            <button onClick={List.edit}>Edit</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    rendEdit(contact, index){
        return(
            <div key={index+1}>
                <table className='table table-bordered' style={{marginBottom: '0'}}>
                    <tbody>
                    <tr className='row' style={{margin: "0"}}>
                        <th className='col-1'>{index+1}</th>
                        <td className="col-3"><textarea defaultValue={contact.name}/></td>
                        <td className="col-2"><textarea defaultValue={contact.number}/></td>
                        <td className="col-2"><textarea defaultValue={contact.company}/></td>
                        <td className="col-2"><textarea defaultValue={contact.email}/></td>
                        <td className="col-2">
                            <button onClick={List.save}>Save</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
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
        const mode = (this.state.edit) ? this.rendEdit : this.rendNorm;

        const list = contactNodes.map(mode);
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
                {list}
            </div>
        )
    }
}

export default List;