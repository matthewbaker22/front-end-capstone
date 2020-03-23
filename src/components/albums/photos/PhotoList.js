import React, { useState, useEffect } from 'react'
import PhotosCard from './PhotoCard'
import { Button, Input, Card } from 'reactstrap'
import { Link } from 'react-router-dom'
import PhotosManager from '../../../modules/PhotosManager'

const PhotoList = props => {
    const [photos, setPhotos] = useState([])

    const getPhotos = () => {
        return PhotosManager.getAll().then(photosFromAPI => {
            setPhotos(photosFromAPI)
        })
    }

    const deletePhoto = (id) => {
        console.log(id)
        PhotosManager.delete(id).then(() =>
            PhotosManager.getAll().then(setPhotos)
        )
    }

    useEffect(() => {
        getPhotos()
    }, [])

    return (
        <div>
            <div>
                <Button onClick={() => {
                    props.history.push("/albums/photo/new")
                }}>Add New Photo</Button>
            </div>
            <div>
                {photos.map(photo => (
                    <PhotosCard
                        key={photo.id}
                        photo={photo}
                        deletePhoto={deletePhoto}
                        {...props}
                    />
                ))}
            </div>
        </div>
    )
}

export default PhotoList