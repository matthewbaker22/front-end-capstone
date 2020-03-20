import React, { useState } from 'react'
import { Card, Button, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import RegisterManager from '../../modules/RegisterManager'
import LoginManager from '../../modules/LoginManager'
import Login from './Login'

const Register = props => {
    const [credentials, setCredentials] = useState({ username: "", email: "" })
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = {...credentials}
        stateToChange[evt.target.id] = evt.target.value
        setCredentials(stateToChange)
    }

    const handleRegister = evt => {
        evt.preventDefault()

        if (credentials.username === "" || credentials.email === "") {
            window.alert("Please input a valid username and email")
        } else {
            LoginManager.getAll().then(users => {
                if(users.find(user => user.username === credentials.username) || users.find(user => user.email === credentials.email)) {
                    window.alert("This username or email already exists.")
                } else {
                    const newUser = {
                        username: credentials.username,
                        email: credentials.email
                    }
                    setIsLoading(true)

                    console.log(newUser)
                    RegisterManager.post(newUser)
                        .then(() => {
                            RegisterManager.getAll().then(users => {
                                const activeUser = users.find(user => user.username === newUser.username)

                                sessionStorage.setItem(
                                    "Active Id",
                                    JSON.stringify(activeUser.id)
                                )
                                props.history.push("/home")
                            })
                        })
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
                            <h2>Register</h2>
                            <div>
                                <Label htmlFor="inputUsername">Username</Label>
                                <Input onChange={handleFieldChange} type="username" id="username" placeholder="Username"
                                required="" autoFocus=""/>

                                <Label htmlFor="inputEmail">Email</Label>
                                <Input onChange={handleFieldChange} type="email" id="email" placeholder="Email"
                                required="" autoFocus=""/>
                            </div>
                            <Button color="success" type="submit" onClick={handleRegister}>Sign In</Button>
                        </fieldset>
                    </form>
                </Card>
            </div>
            <Link to="/login">Already have an account? Login here.</Link>
        </>
    )
}

export default Register