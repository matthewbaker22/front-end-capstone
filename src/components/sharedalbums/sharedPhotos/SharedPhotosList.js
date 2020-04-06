import React, { useState, useEffect } from 'react'
import SharedPhotosCard from './SharedPhotosCard'
import { Button } from 'reactstrap'
import SharedPhotosManager from '../../../modules/SharedPhotosManager'

const SharedPhotosList = props => {
    const [photos, setPhotos] = useState([])

    const getSharedPhotos = () => {
        return SharedPhotosManager.getAllForAlbum(props.match.params.sharedAlbumId).then(photosFromAPI => {
            setPhotos(photosFromAPI)
        })
    }

    useEffect(() => {
        getSharedPhotos()
    }, [])

    return (
        <div>
            <div>
                <Button onClick={() => {
                    props.history.push(`/shared-albums/${props.match.params.sharedAlbumId}/photo/new`)
                }}>Add New Photo
                </Button>
                <Button color="info" onClick={() => {
                    props.history.push("/shared-albums")
                }}>Back to Shared Albums
                </Button>
            </div>
            <div>
                {photos.map(photo => (
                    <SharedPhotosCard
                        key={photo.id}
                        photo={photo}
                        getSharedPhotos={getSharedPhotos}
                        {...props}
                    />
                ))}
            </div>
        </div>
    )
}

export default SharedPhotosList