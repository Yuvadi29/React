import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

{/* Props acts as properties jisse we can add the titles of websites etc.*/ }
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a >
                        </li>
                        <li className="nav-item active mx-2 my-2" >
                            <a  className="nav-a " aria-current="page" href="/about">{props.aboutText}</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className="bg-primary rounded mx-2" onClick={()=> {props.toggleMode('primary')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                        <div className="bg-danger rounded mx-2" onClick={()=> {props.toggleMode('danger')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                        <div className="bg-success rounded mx-2" onClick={()=> {props.toggleMode('success')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                        <div className="bg-warning rounded mx-2" onClick={()=> {props.toggleMode('warning')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                        <div className="bg-light rounded mx-2" onClick={()=> {props.toggleMode('light')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                        <div className="bg-dark rounded mx-2" onClick={()=> {props.toggleMode('dark')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
                    </div>

                    {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>     */}
                    {/* Using Ternary operator with condition to tell if the mode of navbar is light turn it to dark and vice versa */}
                        {/* <input className="form-check-input" onClick={()=> {props.toggleMode('null')}} type="checkbox" id="flexSwitchCheckDefault" /> */}
                        {/* <label htmlFor="flexSwitchCheckDefault" className="form-check-label">Change Mode</label> */}
                    {/* </div> */}
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