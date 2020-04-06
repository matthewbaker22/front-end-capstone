import React, { useState, useEffect } from 'react'
import LoginManager from '../../modules/LoginManager'

const Home = () => {
    const [user, setUser] = useState([])

    const getUsername = () => {
        LoginManager.getUser(sessionStorage.getItem("Active Id")).then(activeUser => {
            setUser(activeUser.firstName)
            console.log(activeUser.firstName)
        })
    }

    useEffect(() => {
        getUsername()
    }, [])

    return (
        <div>
            <h1>Welcome to Scrappy, {user}</h1>
        </div>
    )
}

export default Home