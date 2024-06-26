import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">{props.about}</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ height: '15px' }} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === "dark" ? "disable DarkMode" : "enable DarkMode"}</label>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}


Navbar.propTypes = {
    title: propTypes.string.isRequired,
    about: propTypes.string
}

Navbar.defaultProps = {
    title: "Enter Your Title Here",
    about: "Enter Aboutus Information Here"
}