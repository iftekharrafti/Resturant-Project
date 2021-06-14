import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import './Header.style.css';

const Navigation = props => {
    return(
        <div>
            <Navbar dark color="dark" className="bg-light navbar-dark nav-bar">
                <NavbarBrand href="/"> Resturant Project </NavbarBrand>
                <Nav className="mr-auto nav-bar-item">
                    <NavItem >
                        <NavLink href="/" >Burger</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Pizza</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">French frice</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Cake</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation;