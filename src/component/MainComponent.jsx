import React, { Component } from 'react';
import Header from './header/Header';
import Body from './body/Menu';

class MainComponent extends Component{
    render(){
        return(
            <div>
                <Header />
                <Body />
            </div>
        )
    }
}

export default MainComponent;