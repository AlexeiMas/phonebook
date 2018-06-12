import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
export const data = [
    {name: "Juan Cruz", number: "+380999999999", company: "Computer company", email: "lx@mail.com"},
    {name: "Norah Jones", number: "+380221113434", company: "Data center", email: "user@mail.com"}
];
ReactDOM.render(<App data={data} /*pollInterval={50000}*//>, document.getElementById('root'));
