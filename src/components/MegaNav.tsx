import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, Button, Container} from 'reactstrap';
import './index.scss';

// Type
import Session from '../interfaces/Session.interface';

export class MegaNav extends Component <{
    session?: Session,
}> {

    render(){
        const {session}  = this.props; 
        return (
            (!session) ? 
            <Navbar className={"nav-mega"}>
                <Container>
                    <NavbarBrand href="" > 
                        <img src="https://cdn.megajogos.com.br/images/logo_top_01_pt_BR.png" alt=""/> 
                    </NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink className={"nav-link-mega"} href='#'>
                                SUPORTE
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={"nav-link-mega"} href='#'>
                                BLOG
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav>
                        <NavItem>
                            <Button className={"nav-button-playnow-mega"}>
                                Jogar Agora
                            </Button>
                        </NavItem>
                        <NavItem >
                            <Button className={"nav-button-join-mega"}>
                                Entrar
                            </Button>
                        </NavItem>
                    </Nav>
                </Container>
                
            </Navbar> 
            :
            <Navbar className={session.isVip ? 'nav-vip-mega' : 'nav-mega'}>
                <Container>
                    <NavbarBrand href="" > 
                        {session.isVip ? 
                            <img src="https://cdn.megajogos.com.br/images//logo_top_01_pt_BR-VIP.png" alt=""></img> :
                            <img src="https://cdn.megajogos.com.br/images/logo_top_01_pt_BR.png" alt=""/> 
                        }
                    </NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink className={"nav-link-mega"} href='#'>
                                PERFIL
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={"nav-link-mega"} href='#'>
                                SUPORTE
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={"nav-link-mega"} href='#'>
                                BLOG
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={"nav-link-mega"} href='#'>
                                LOJA
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={"nav-link-mega"} href='#'>
                                JOGAR
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav>    
                        {
                            !session.isVip && 
                            <NavItem>
                                <Button className={"nav-button-playnow-mega"}>
                                    Seja VIP!
                                </Button>
                            </NavItem>    
                        }
                        
                        <NavItem >
                            <Button className={"nav-button-join-mega"}>
                                USER:{session.user}
                            </Button>
                        </NavItem>
                        
                    </Nav>
                </Container>
            </Navbar> 
        
        )   
    }

}

export default MegaNav;