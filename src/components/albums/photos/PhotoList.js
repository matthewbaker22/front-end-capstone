import React, { useState, useEffect } from 'react'
import PhotosCard from './PhotoCard'
import { Button, Input, Card } from 'reactstrap'
import { Link } from 'react-router-dom'
import PhotosManager from '../../../modules/PhotosManager'

const PhotoList = props => {
    const [photos, setPhotos] = useState([])

    const getPhotos = () => {
        return PhotosManager.getAllForAlbum(props.match.params.albumId).then(photosFromAPI => {
            setPhotos(photosFromAPI)
        })
    }
    

    useEffect(() => {
        getPhotos()
    }, [])

    return (
        <div>
            <div>
                <p>{props.match.params.name}</p>
            </div>
            <div>
                <Button onClick={() => {
                    props.history.push(`/albums/${props.match.params.albumId}/photo/new`)
                }}>Add New Photo</Button>
                <Button color="info" onClick={() => {
                    props.history.push("/albums")
                }}>Back to albums</Button>
            </div>
            <div className="photo-flex">
                {photos.map(photo => (
                    <PhotosCard
                        key={photo.id}
                        photo={photo}
                        getPhotos={getPhotos}
                        {...props}
                    />
                ))}
            </div>
        </div>
    )
}

export default PhotoList