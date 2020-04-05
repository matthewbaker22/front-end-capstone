import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import LoginManager from '../../modules/LoginManager'
import FriendsManager from '../../modules/FriendsManager'
import AllFriendsCard from '../friends/AllFriendsCard'

const AllFriends = (props) => {
    const [friends, setFriends] = useState([])

    const Push = () => {
        props.history.push("friends/add-friend")
    }

    const FindFriendsById = () => {
        FriendsManager.getFriends().then(friends => {
            const myFriends = friends.filter(friend => friend.userId === parseInt(sessionStorage.getItem("Active Id")))
            setFriends(myFriends)
        })
    }

    useEffect(() => {
        FindFriendsById()
    }, [])


    return (
        <div>
            <Button onClick={Push}>Add Friend Here</Button>
            {friends.map(friend => (
                <AllFriendsCard
                    key={friend.id} 
                    friend={friend}
                    {...props}
                />
            ))}
        </div>
    )
}

export default AllFriends