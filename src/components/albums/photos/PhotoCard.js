import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Card, CardBody, Button } from 'reactstrap'
import AlbumsManager from '../../../modules/AlbumsManager'
import PhotosManager from '../../../modules/PhotosManager'
import './PhotoCard.css'

const PhotosCard = (props) => {
    const [photos, setPhotos] = useState([])

    const photoId = props.photo.id
    
    const makeCoverPhoto = (photoId) => {
        const CoverPhoto = {
            id: parseInt(props.match.params.albumId),
            photoId: photoId
        }
        AlbumsManager.setCoverPhoto(CoverPhoto)
            .then(props.history.push(`/albums/${props.match.params.albumId}`))
    }
    
    const deletePhoto = (id) => {
        PhotosManager.checkIfCoverPhoto(id).then(albumArray => {
            if (albumArray.length > 0) {
                const albumToUpdate = albumArray[0]
                albumToUpdate.photoId = undefined
                return AlbumsManager.update(albumToUpdate)
            }
        }).then(() => PhotosManager.delete(id)).then(() =>
            props.getPhotos()
        )
    }


    return (
        <div className="photo-card">
            <Card className="photo-flex">
                <CardBody>
                    <img width="250px" height="150px" src={props.photo.photoUrl}></img>
                    <h3>{props.photo.title}</h3>
                    <p>{props.photo.description}</p>
                    <Button color="info" type="button" onClick={() => {
                        props.history.push(`/albums/${props.photo.id}/photo/edit`)
                    }}>
                        Edit Photo
                    </Button>
                    <Button color="danger" type="button" onClick={() => {
                        deletePhoto(props.photo.id)
                    }}>
                        Delete Photo
                    </Button>
                    <Button type="button" onClick={() => {
                        makeCoverPhoto(photoId)
                    }}>Make Cover Photo</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default PhotosCard