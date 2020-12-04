import React, { Component } from 'react';
import MegaNav from './components/MegaNav';


class App extends Component {

    render() {
        const batataUser = {isVip: true, user:"batata"};
        const potatoUser = {isVip: false, user: "potato"};




        return(
            <MegaNav session={potatoUser} />
        )
    }
    
    
};

export default App;
