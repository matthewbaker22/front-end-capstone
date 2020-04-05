import React, { useState, useEffect } from 'react'
import AllFriends from '../friends/AllFriends'
import LoginManager from '../../modules/LoginManager'
import SharedAlbumsManager from '../../modules/SharedAlbumsManager'
import { Button, Card, CardBody, Form, Label, Input, FormGroup } from 'reactstrap'

const AllFriendsCard = (props) => {
    const [friend, setFriend] = useState([])
    const [sharedAlbum, setSharedAlbum] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isAdding, setIsAdding] = useState(false)


    const GetFriendInfo = () => {
        LoginManager.getFriends(props.friend.friendId).then(setFriend)
    }

    const handleFieldChange = evt => {
        const stateToChange = {...sharedAlbum}
        stateToChange[evt.target.id] = evt.target.value
        setSharedAlbum(stateToChange)
    }

    const constructNewSharedAlbum = evt => {
        evt.preventDefault()

        const newSharedAlbum = {...sharedAlbum}
        newSharedAlbum.friendId = props.friend.id
        setIsLoading(true)
        SharedAlbumsManager.createSharedAlbum(newSharedAlbum)
            .then(() => props.history.push("/shared-albums"))
    }

    const handleCancel = () => {
        props.history.push("/shared-albums")
    }

    const ChangeAdd = () => {
        setIsAdding(!isAdding)
    }

    useEffect(() => {
        GetFriendInfo()
    }, [])

    return (
        <div>
            <p>{friend.firstName + " " + friend.lastName}</p>
            <p>Username: {friend.username}</p>

            {isAdding ? 
            <div>
            <Card>
                <CardBody>
                    <Form>
                        <fieldset>
                            <div>
                                <FormGroup>
                                    <Label>Album Name</Label>
                                    <Input 
                                        type="text" required onChange={handleFieldChange}
                                        id="name" placeholder="Album name"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Album Description</Label>
                                    <Input 
                                        type="text" required onChange={handleFieldChange}
                                        id="description" placeholder="Album description"
                                    />
                                </FormGroup>
                            </div>
                            <div>
                                <Button
                                    color="primary"
                                    type="button"
                                    disabled={isLoading}
                                    onClick={constructNewSharedAlbum}
                                >Submit</Button>
                                <Button color="info" className="" disabled={isLoading} onClick={handleCancel}>Cancel</Button>
                            </div>
                        </fieldset>
                    </Form>
                </CardBody>
            </Card>
        </div>
            :
            <Button color="success" onClick={ChangeAdd}>Create Shared Album!</Button>
            }
        </div>
    )
}

export default AllFriendsCard
