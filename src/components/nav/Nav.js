import React, { useEffect } from "react"
import { withRouter, Link } from "react-router-dom"
import './Nav.css'


const NavBar = props => {
    const activeUser = sessionStorage.getItem("Active Id")
    const clearUser = () => {
        sessionStorage.clear()
    }

    if(activeUser === null) {
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <h3 className="app-name">Scrappy</h3>
                        </li>
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
                            <h3 className="app-name">Scrappy</h3>
                        </li>
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
                        <li>
                            <Link className="nav-link" onClick={clearUser} to="/">
                                Log Out
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(NavBar)