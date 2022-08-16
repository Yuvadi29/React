import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

{/* Props acts as properties jisse we can add the titles of websites etc.*/ }
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
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
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-danger" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'yellow' : 'light'}`}> {/*Using Ternary operator with condition to tell if the mode of navbar is light turn it to dark and vice versa */}
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label htmlFor="flexSwitchCheckDefault" className="form-check-label">Change Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

{/*This will setup the property type of any component of the react application, isRequired shows that the given property is required. */ }
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

{/*This will setup the default Prop type for any part of the component that you are making */ }
Navbar.defaultProps = {
    title: 'Set Title',
    aboutText: 'About'
}