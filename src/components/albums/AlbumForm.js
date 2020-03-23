import React, { useState } from 'react'
import AlbumManager from '../../modules/AlbumsManager'
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap'

const AlbumForm= props => {
    const [album, setAlbum] = useState({name: "", description: "", userId: ""})
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = {...album}
        stateToChange[evt.target.id] = evt.target.value
        setAlbum(stateToChange)
    }

    const handleCancel = () => {
        props.history.push("/albums")
    }

    const constructNewAlbum = evt => {
        evt.preventDefault()

        const newAlbum = {...album}
        newAlbum.userId = parseInt(sessionStorage.getItem("Active Id"))
        console.log(newAlbum)
        setIsLoading(true)
        AlbumManager.post(newAlbum)
            .then(() => props.history.push("/albums"))
    }

    return (
        <>
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
                                        onClick={constructNewAlbum}
                                    >Submit</Button>
                                    <Button color="info" className="" disabled={isLoading} onClick={handleCancel}>Cancel</Button>
                                </div>
                            </fieldset>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default AlbumForm

