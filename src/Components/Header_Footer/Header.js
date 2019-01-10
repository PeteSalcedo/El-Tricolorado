import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';


class Header extends Component {
    render() {
        return (
            <AppBar
            position="fixed"
            style={{
                backgroundColor:'#98c5e9',
                boxShadow: 'none',
                padding:'10px 0',
                borderBottom: '2px solid #00285e'
            }}></AppBar>
            
     
        )
    }
}

export default Header;