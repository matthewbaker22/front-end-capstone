import React from "react"
import { withRouter, Link } from "react-router-dom"
// import './Nav.css'

const NavBar = props => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link className="nav-link" to="/home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/albums">
                            Albums
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar