import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';

// Type
import Session from '../interfaces/Session.interface';

export class MegaNav extends Component <{
    session?: Session,
}> {

    render(){
        const {session}  = this.props; 
        return (
            (!!session?.isVip) ? 
            <Navbar>
                <NavbarBrand href="" > 
                    <img src="https://cdn.megajogos.com.br/images/footer/logo-megajogos-footer.png" alt=""/> 
                </NavbarBrand>
                <Nav>
                    <NavItem>
                        Home
                    </NavItem>
                <NavItem>
                    Teste
                </NavItem>
            </Nav>
        </Navbar>
            
            : "NÃO"
            
        )   
    }

}

export default MegaNav;