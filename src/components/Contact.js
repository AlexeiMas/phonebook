import React, {Component} from 'react'

class Contact extends Component{
    state = {
        edit: false
    };

    edit = () =>{
        this.setState({edit: true});
    };
    remove = () =>{
        this.props.delCont(this.props.index)
    };
    save = () => {
        const valueName = this.refs.newName.value;
        const valueNumber = this.refs.newNumber.value;
        const valueCompany = this.refs.newCompany.value;
        const valueEmail = this.refs.newEmail.value;
        const onContactSave ={
            name: valueName,
            number: valueNumber,
            company: valueCompany,
            email: valueEmail
        };
        this.props.updCont(onContactSave, this.props.index);
        console.log(onContactSave);
        this.setState({edit: false})
    };

    rendNorm = (contact, index) =>{
        return(
            <tr className='row' style={{margin: "0"}}>
                <th className='col-1'>{index+1}</th>
                <td className="contact-name col-3"><h2 >{contact.name}</h2></td>
                <td className="contact-number col-2"><p >{contact.number}</p></td>
                <td className="contact-company col-2"><p >{contact.company}</p></td>
                <td className="contact-email col-2"><p >{contact.email}</p></td>
                <td className="col-2">
                    <button onClick={this.edit}>Edit</button>
                    <button onClick={this.remove}>Delete</button>
                </td>
            </tr>
        )
    };

    rendEdit = (contact, index) => {
        return(
            <tr className='row' style={{margin: "0"}}>
                <th className='col-1'>{index+1}</th>
                <td className="col-3"><input type="text" placeholder="Name" ref="newName" defaultValue={contact.name}/></td>
                <td className="col-2"><input type="tel" placeholder="Number" ref="newNumber" defaultValue={contact.number}/></td>
                <td className="col-2"><input type="text" placeholder="Company" ref="newCompany" defaultValue={contact.company}/></td>
                <td className="col-2"><input type="email" placeholder="Email" ref="newEmail" defaultValue={contact.email}/></td>
                <td className="col-2">
                    <button onClick={this.save}>Save</button>
                </td>
            </tr>
        )
    };

    render() {
    const {contact, index} = this.props;
    console.log(this.props);
    const mode = (this.state.edit) ? this.rendEdit(contact, index) : this.rendNorm(contact, index);
        return (
            mode
        )
    }
}

export default Contact;