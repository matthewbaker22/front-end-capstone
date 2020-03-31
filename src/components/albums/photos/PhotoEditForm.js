import React, { useState, useEffect } from 'react'
import PhotosManager from '../../../modules/PhotosManager'
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from "reactstrap";

const PhotoEditForm = props => {
    const [photo, setPhoto] = useState({title: "", description: ""})
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = {...photo}
        stateToChange[evt.target.id] = evt.target.value
        setPhoto(stateToChange)
    }

    const handleCancel = () => {
        props.history.push("/albums")
    }

    const updateExistingPhoto = evt => {
        evt.preventDefault()
        setIsLoading(true)

        const editedPhoto = {
            id: props.match.params.photoId,
            title: photo.title,
            description: photo.description,
            albumId: photo.albumId,
            photoUrl: photo.photoUrl
        }

        PhotosManager.update(editedPhoto).then(() => 
            props.history.push(`/albums/${photo.albumId}`)
        )
    }

    useEffect(() => {
        PhotosManager.getPhoto(props.match.params.photoId)
            .then(setPhoto)
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
                                        <Label>Photo Name</Label>
                                        <Input
                                            type="text"
                                            required
                                            onChange={handleFieldChange}
                                            id="title"
                                            placeholder="Photo name"
                                            value={photo.title}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Photo Description</Label>
                                        <Input
                                            type="text"
                                            required
                                            onChange={handleFieldChange}
                                            id="description"
                                            placeholder="Photo Description"
                                            value={photo.description}
                                        />
                                    </FormGroup>
                                </div>
                                <div>
                                    <Button color="primary" type="button" disabled={isLoading} onClick={updateExistingPhoto}>Submit</Button>
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

export default PhotoEditForm