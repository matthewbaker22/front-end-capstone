import React from 'react'
import FriendsManager from '../../modules/FriendsManager'
import { Button } from 'reactstrap'
import { useState } from 'react'

const FriendsCard = (props) => {
    const [friend, setFriend] = useState({userId: "", friendId: ""})

    const handleFieldChange = evt => {
        const stateToChange = {...friend}
        stateToChange[evt.target.id] = evt.target.value
        setFriend(stateToChange)
    }

    const addFriend = () => {
        // FriendsManager.post()
        const newFriend = {...friend}
        newFriend.userId = parseInt(sessionStorage.getItem("Active Id"))
        newFriend.friendId = props.foundFriends.id
        FriendsManager.post(newFriend).then(Push())

        // console.log(props.foundFriends.id)
        // console.log(sessionStorage.getItem("Active Id"))
    }

    const Push = () => {
        props.history.push("/friends")
    }

    return (
        <>
            <div>
                <p>{props.foundFriends.firstName}</p>
                <p>{props.foundFriends.lastName}</p>
                <p>Username: {props.foundFriends.username}</p>
                <Button onClick={addFriend}>Add Friend</Button>
            </div>
        </>
    )
}

export default FriendsCard