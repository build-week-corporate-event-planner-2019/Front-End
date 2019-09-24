import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';



function Navigation() {

    return (
        <div className="navbar">

            <Navbar className="nav-brand" light expand="md">
                <NavbarBrand href="#">Event Planner App</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="#">Events</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Sign-Up</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Log-In</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Log-Out</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}


export default Navigation;