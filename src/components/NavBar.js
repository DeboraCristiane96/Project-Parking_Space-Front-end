import React from 'react';
import NavBarItem from './NavBarItem'

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <NavBarItem href="/" label="Home" />
                        <NavBarItem href="/login" label="Login"/>
                        <NavBarItem href="/createPerson" label="Create Person"/>
                        <NavBarItem href="/updatePerson/:code" label="Update Person"/>
                        <NavBarItem href="/deletePerson" label="Delete Person"/>
                        <NavBarItem href="/viewPerson" label="persons"/>
                        <NavBarItem href="/createCar" label="Create Car"/>
                        <NavBarItem href="/updateCar/:id" label="Update Car"/>
                        <NavBarItem href="/deleteCar" label="Delete Car"/>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;