import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Form extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e){
        e.preventDefault();
        const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
        const number = ReactDOM.findDOMNode(this.refs.number).value.trim();
        const company = ReactDOM.findDOMNode(this.refs.company).value.trim();
        const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        console.log(name);
        console.log(number);
        console.log(company);
        console.log(email);

        if(!name || !number){
            return (alert("Input data in the fields"))
        }
       this.props.onContactSubmit({
            name: name,
            number: number,
            company: company,
            email: email
        });

        ReactDOM.findDOMNode(this.refs.name).value = '';
        ReactDOM.findDOMNode(this.refs.number).value = '';
        ReactDOM.findDOMNode(this.refs.company).value = '';
        ReactDOM.findDOMNode(this.refs.email).value = '';
        return
    }
    render (){
        return (
            <form className="Form" onSubmit={this.handleSubmit}>
                <input defaultValue='user' type="text" className="form-control" placeholder="Name" ref="name" />
                <input defaultValue='380999999999' type="tel" className="form-control" placeholder="Number" ref="number"
                       pattern="380[0-9]{9}" title='Input 380 and 9 digits'/>
                <input defaultValue='IT' type="text" className="form-control" placeholder="Company" ref="company" />
                <input defaultValue='user@mail.com' type="email" className="form-control" placeholder="Email" ref="email" />
                <button type="submit" className="btn btn-success">Add Contact</button>
            </form>
        );
    }


}

export default Form;