import React, { Component } from 'react';
import Form from './Form'
import List from './List'
import {data} from '../index'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        };
        this.handleContactSubmit = this.handleContactSubmit.bind(this);
        this.loadDataFromVar = this.loadDataFromVar.bind(this);
    }


    loadDataFromVar (){
        // const data = [
        //     {name: "Juan Cruz", number: "+380999999999", company: "Computer company", email: "lx@mail.com"},
        //     {name: "Norah Jones", number: "+380221113434", company: "Data center", email: "user@mail.com"}
        // ];
        // console.log(data);
        this.setState({data: data});
    }

    handleContactSubmit (contact){
        console.log(contact);
        this.state.data.push(contact);
        setInterval(this.loadDataFromVar, this.props.pollInterval);
        //this.setState(this.state.data.push(contact));
        console.log(this.state.data);
    }

    componentDidMount (){
        this.loadDataFromVar();
        // setInterval(this.loadDataFromVar, this.props.pollInterval);
    }

    render (){
       return (
            <div className="App container text-center">
                <h1>Phone Book</h1>
                <Form onContactSubmit={this.handleContactSubmit} />
                <List data={this.state.data}/>
            </div>
        )
    }
}

export default App;
