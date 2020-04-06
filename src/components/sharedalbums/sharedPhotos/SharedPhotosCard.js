import React, { useState } from 'react'
import { Card, CardBody, Button } from 'reactstrap'
import SharedPhotosManager from '../../../modules/SharedPhotosManager'
import SharedAlbumsManager from '../../../modules/SharedAlbumsManager'
import './SharedPhotoCard.css'

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

    const deleteSharedPhoto = id => {
        SharedPhotosManager.checkIfCoverPhoto(id).then(sharedAlbumArray => {
            if (sharedAlbumArray.length > 0) {
                const sharedAlbumToUpdate = sharedAlbumArray[0]
                sharedAlbumToUpdate.photoId = undefined
                return SharedAlbumsManager.update(sharedAlbumToUpdate)
            }
        }).then(() => SharedPhotosManager.delete(id)).then(() =>
            props.getSharedPhotos()
        )
    }

    return (
        <div className="photo-card">
            <Card className="photo-flex">
                <CardBody>
                    <img width="250px" height="150px" src={props.photo.photoUrl}></img>
                    <h3>{props.photo.title}</h3>
                    <p>{props.photo.description}</p>
                </CardBody>
                <Button type="button" onClick={() => {
                    makeCoverPhoto(sharedPhotoId)
                }}>Make Cover Photo</Button>
                <Button color="danger" type="button" onClick={() => {
                    deleteSharedPhoto(props.photo.id)
                }}>Delete Photo</Button>
            </Card>
        </div>
    )
}

export default SharedPhotosCard