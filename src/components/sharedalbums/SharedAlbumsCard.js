import React, { useState, useEffect } from 'react'
import { Card, CardBody, Button } from 'reactstrap'
import { Link } from "react-router-dom"
import DefaultCover from './DefaultCover.jpg'
import SharedAlbumsManager from '../../modules/SharedAlbumsManager'
import './SharedAlbumsCard.css'

const SharedAlbumsCard = (props) => {
    const [coverPhoto, setCoverPhoto] = useState(DefaultCover)

    const getSharedAlbumCovers = () => {
        if (props.sharedAlbum.photoId !== undefined && props.sharedAlbum.photoId !== null) {
             SharedAlbumsManager.getCoverPhoto(props.sharedAlbum.photoId).then(coverPhotoFromAPI => {
                     setCoverPhoto(coverPhotoFromAPI.photoUrl)
            })
        }
    }

    useEffect(() => {
        getSharedAlbumCovers()
    }, [])

    return (
            <div className="album-card">
                <Card className="album-flex">
                    <CardBody className="hover-bcg">
                        <Link to={"/shared-albums/" + props.sharedAlbum.id}>
                            <img src={coverPhoto} className="cover-photo"></img>
                            <p className="album-title">{props.sharedAlbum.name}</p>
                            <p className="album-description">{props.sharedAlbum.description}</p>
                        </Link>
                    </CardBody>
                </Card>
            </div>
    )
}

export default SharedAlbumsCard