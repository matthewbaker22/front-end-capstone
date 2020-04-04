import React, { useState, useEffect } from 'react'
import FriendsCard from './FriendsCard'
import FriendsManager from '../../modules/FriendsManager'
import LoginManager from '../../modules/LoginManager'
import { Button, Input, Card } from 'reactstrap'

const FriendList = (props) => {
    const [search, setSearch] = useState([])
    const [found, setFound] = useState(false)
    const [foundFriends, setFoundFriends] = useState([])

    const checkUsers = () => {
        LoginManager.getAll().then(usersFromAPI => {
            usersFromAPI.map(users => {
                if ( search !== "" && users.username.toLowerCase() === search.toLowerCase()) {
                    setFoundFriends(users)
                    setFound(true)  
                }  
            })  
        })
    }

    const searchForUsers = evt => {
        setSearch(evt.target.value)
    }

    if (found === true) {
        return (
            <div>
                <input type="text" onChange={searchForUsers} />
                <Button onClick={checkUsers}>Find Friend!</Button>
                <FriendsCard 
                    foundFriends={foundFriends}
                />
            </div>
        )
    } else {
        return (
            <div>
                <input type="text" onChange={searchForUsers}/>
                <Button onClick={checkUsers}>Find Friend!</Button>
            </div>
        )
    }
}

export default FriendList
