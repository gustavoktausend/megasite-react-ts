import React, { Component } from 'react';
import MegaNav from './components/MegaNav';


class App extends Component {

    render() {
        return(
            <MegaNav session={{isVip:true, user:"batata"}} />
        )
    }
    
    
};

export default App;
