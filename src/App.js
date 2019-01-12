import React, { Component } from 'react';
import Header from './Components/Header_Footer/Header.js'
import Footer from './Components/Header_Footer/Footer.js'

class App extends Component {
    render(){
        return (
            <div className="App">
            <Header />
            <Footer />
            </div>
        );
    }
}

export default App;
