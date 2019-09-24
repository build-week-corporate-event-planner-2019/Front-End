import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';



function Navigation() {

    return (
        <div className="navbar">

            <Navbar className="nav-group" light expand="md">
                <NavbarBrand className="nav-brand" href="#">Event Planner App</NavbarBrand>
                <Nav className="nav-items" navbar>
                    <NavItem className="nav-item">
                        <NavLink href="#">Events</NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink href="#">Sign-Up</NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink href="#">Log-In</NavLink>
                    </NavItem>
                    <NavItem className="nav-item">
                        <NavLink href="#">Log-Out</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}


export default Navigation;