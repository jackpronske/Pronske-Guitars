import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "there"
        };
    }

    componentDidMount() {
        axios.get('/docs')
        .then((data) => {
            console.log(data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return <h1>Hello, {this.state.name}</h1>;
    } 
}

export default App;