import React, { Component } from 'react';
import Form from './Form'
import List from './List'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }

    handleContactSubmit (contact){
        this.state.data.push(contact);
        console.log(this.state.data);
    }

    render (){

        return (
            <div className="App container">
                <h1>Phone Book</h1>
                <Form onContactSubmit={this.handleContactSubmit} />
                <List data={this.state.data} />
            </div>
        )
    }
}

export default App;
