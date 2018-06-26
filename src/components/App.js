import React, { Component } from 'react';
import Form from './Form'
import List from './List'

class App extends Component {
    state = {
        data: [
            {name: "Juan Cruz", number: "+380999999999", company: "Computer company", email: "lx@mail.com"},
            {name: "Norah Jones", number: "+380221113434", company: "Data center", email: "user@mail.com"}
        ]
    };

    pusherContactSubmit = contact => {
        console.log(contact);
        const arr =this.state.data;
        arr.push(contact);
        this.setState({data: arr});
        console.log(this.state.data);
    };

    delContact = index => {
        const arr = this.state.data;
        arr.splice(index, 1);
        this.setState({data: arr});
    };
    updateContact = (payload, index) => {
        const arr = this.state.data;
        arr[index] = payload;
        this.setState({data: arr});
    };

    render() {
       return (
            <div className="App container text-center">
                <h1>Phone Book</h1>
                <Form onContactSubmit={this.pusherContactSubmit} />
                <List data={this.state.data}
                      delCont={this.delContact}
                      updCont={this.updateContact}
                />
            </div>
        )
    }
}

export default App;
