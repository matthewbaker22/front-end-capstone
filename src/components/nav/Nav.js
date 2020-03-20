import React, { useEffect } from "react"
import { withRouter, Link } from "react-router-dom"
// import './Nav.css'


const NavBar = props => {
    const activeUser = sessionStorage.getItem("Active Id")
    console.log(activeUser)
    const clearUser = () => {
        sessionStorage.clear()
    }

    if(activeUser === null) {
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/register">
                                Register
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    } else {
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
}

export default withRouter(NavBar)