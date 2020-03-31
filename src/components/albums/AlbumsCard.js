import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { Card, CardBody, Button } from 'reactstrap'
import DefaultCover from './DefaultCover.jpg'
import AlbumsManager from '../../modules/AlbumsManager'
import './AlbumCard.css'

const AlbumsCard = (props) => {
    const [coverPhoto, setCoverPhoto] = useState(DefaultCover)

    const getAlbumCovers = () => {
        if (props.album.photoId !== undefined && props.album.photoId !== null) {
             AlbumsManager.getCoverPhoto(props.album.photoId).then(coverPhotoFromAPI => {
                     setCoverPhoto(coverPhotoFromAPI.photoUrl)
                     console.log(coverPhotoFromAPI)
                })
        }
    }

    useEffect(() => {
        getAlbumCovers()
    }, [])

    return (
        <div className="album-card">
            <Card className="album-flex">
                <CardBody className="hover-bcg">
                    <Link to={"/albums/" + props.album.id}>
                        <img src={coverPhoto} className="cover-photo"></img>
                        <p className="album-title">{props.album.name}</p>
                        <p className="album-description">{props.album.description}</p>
                    </Link>
                    <Button color="info" type="button" onClick={() =>
                        props.history.push(`/albums/${props.album.id}/edit`)}>
                        Edit Album
                    </Button>
                    <Button color="danger" type="button" onClick={() =>
                        props.deleteAlbum(props.album.id)}>
                        Delete Album
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default AlbumsCard