import React, { useState, useEffect } from 'react'
import AlbumsManager from '../../modules/AlbumsManager'
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from "reactstrap";

const AlbumEditForm = props => {
    const [album, setAlbum] = useState({name: "", description: "", userId: "", photoId: ""})
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = {...album}
        stateToChange[evt.target.id] = evt.target.value
        setAlbum(stateToChange)
    }

    const handleCancel = () => {
        props.history.push("/albums")
    }

    const updateExistingAlbum = evt => {
        evt.preventDefault()
        setIsLoading(true)

        const editedAlbum = {
            id: props.match.params.albumId,
            name: album.name,
            description: album.description,
            userId: parseInt(sessionStorage.getItem("Active Id")),
            photoId: parseInt(album.photoId)
        }

        AlbumsManager.update(editedAlbum).then(() => 
            props.history.push("/albums")
        )
    }

    useEffect(() => {
        AlbumsManager.getSingleAlbum(props.match.params.albumId)
            .then(setAlbum)
    }, [])

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
                                            type="text"
                                            required
                                            onChange={handleFieldChange}
                                            id="name"
                                            placeholder="Album name"
                                            value={album.name}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Album Description</Label>
                                        <Input
                                            type="text"
                                            required
                                            onChange={handleFieldChange}
                                            id="description"
                                            placeholder="Album Description"
                                            value={album.description}
                                        />
                                    </FormGroup>
                                </div>
                                <div>
                                    <Button color="primary" type="button" disabled={isLoading} onClick={updateExistingAlbum}>Submit</Button>
                                    <Button color="info" disabled={isLoading} onClick={handleCancel}>Cancel</Button>
                                </div>
                            </fieldset>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default AlbumEditForm