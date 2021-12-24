import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
    return (
        <div style={{ backgroundColor: "#091C30" }}>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 max-auto" >
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="container-fluid">
                                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span style={{ backgroundColor: "white" }} className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0" >
                                        <li className="nav-item">
                                            <NavLink style={{ color: "white" }} activeClassName="menu_active" className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={{ color: "white" }} activeClassName="menu_active" className="nav-link active" to="/aboutUs">About</NavLink>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <NavLink style={{ color: "white" }}  className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Services
                                            </NavLink>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><NavLink className="dropdown-item" to="/websitServices">Web design & development</NavLink></li>
                                                {/* <li><NavLink className="dropdown-item" to="/digitalServices">Digital Marketing</NavLink></li> */}
                                                <li><NavLink className="dropdown-item" to="/seoServies">SEO</NavLink></li>
                                            </ul>
                                        </li>
                                        {/* <li className="nav-item">
                                            <NavLink style={{ color: "white" }} activeClassName="menu_active" className="nav-link active" to="/services">Services</NavLink>
                                        </li> */}


                                        <li className="nav-item">
                                            <NavLink style={{ color: "white" }} activeClassName="menu_active" className="nav-link active" to="/contactUs">Contact</NavLink>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Navbar;