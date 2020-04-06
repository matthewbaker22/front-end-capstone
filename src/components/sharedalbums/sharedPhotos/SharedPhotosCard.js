import React, { useState } from 'react'
import { Card, CardBody, Button } from 'reactstrap'
import SharedPhotosManager from '../../../modules/SharedPhotosManager'
import SharedAlbumsManager from '../../../modules/SharedAlbumsManager'

const SharedPhotosCard = props => {
    const sharedPhotoId = props.photo.id

    const makeCoverPhoto = photoId => {
        const CoverPhoto ={
            id: parseInt(props.match.params.sharedAlbumId),
            photoId: photoId
        }
        SharedAlbumsManager.setCoverPhoto(CoverPhoto)
            .then(props.history.push(`/shared-albums/${props.match.params.sharedAlbumId}`))
    }

    const deletePhoto = id => {
        SharedPhotosManager.checkIfCoverPhoto(id)
    }

    return (
        <div>
            <Card className="photo-card">
                <CardBody>
                    <img width="250px" height="150px" src={props.photo.photoUrl}></img>
                    <h3>{props.photo.title}</h3>
                    <p>{props.photo.description}</p>
                </CardBody>
                <Button type="button" onClick={() => {
                    makeCoverPhoto(sharedPhotoId)
                }}>Make Cover Photo</Button>
            </Card>
        </div>
    )
}

export default SharedPhotosCard