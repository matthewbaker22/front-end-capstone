import React, { useState } from 'react'
import { Card, Button, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import LoginManager from '../../modules/LoginManager'

const Login = props => {
    const [credentials, setCredentials] = useState({username: "", email: ""})

    const handleFieldChange = evt => {
        const stateToChange = {...credentials}
        stateToChange[evt.target.id] = evt.target.value
        setCredentials(stateToChange)
        console.log("handle field change")
    }

    const handleLogin = evt => {
        evt.preventDefault()
        if (credentials.username === "" || credentials.email === "") {
            window.alert("Please input a username and email")
        } else {
            LoginManager.getAll().then(users => {
                console.log("hello")
                if (users.find(user => user.username === credentials.username) && users.find(user => user.email === credentials.email)) {
                    const user = users.find(user => user.username === credentials.username)

                    sessionStorage.setItem(
                        "Active Id",
                        JSON.stringify(user.id)
                    )
                    console.log("Should be pushing to home")
                    props.history.push("/home")
                } else {
                    window.alert("Invalid username or email")
                }
            })
        }
    }

    return (
        <>
            <div>
                <Card>
                    <form>
                        <fieldset>
                            <h2>Sign In</h2>
                            <div>
                                <Label htmlFor="inputUsername">Username</Label>
                                <Input onChange={handleFieldChange} type="username" id="username" placeholder="Username"
                                required="" autoFocus=""/>

                                <Label htmlFor="inputEmail">Email</Label>
                                <Input onChange={handleFieldChange} type="email" id="email" placeholder="Email"
                                required="" autoFocus=""/>
                            </div>
                            <Button color="success" type="submit" onClick={handleLogin}>Sign In</Button>
                        </fieldset>
                    </form>
                </Card>
            </div>
            <Link to="/register">Don't have an account? Register here.</Link>
        </>
    )
}

export default Login