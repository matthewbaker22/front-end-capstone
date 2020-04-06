import React, { useState, useEffect } from 'react'
import SharedPhotosManager from '../../../modules/SharedPhotosManager'

const SharedPhotosCloudinary = props => {
    const [newImage, setNewImage] = useState({title: "", description: "", photoUrl: ""})
    const [photos, setPhotos] = useState("")
    const[loading, setLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = {...newImage}
        stateToChange[evt.target.id] = evt.target.value
        setNewImage(stateToChange)
    }

    const postNewImage = evt => {
        evt.preventDefault()
        setLoading(true)

        const Photo = {
            title: newImage.title,
            description: newImage.description,
            photoUrl: photos,
            sharedAlbumId: parseInt(props.match.params.sharedAlbumId)
        }
        SharedPhotosManager.addNewPhoto(Photo).then(() => props.history.push(`/shared-albums/${props.match.params.sharedAlbumId}`))
    }

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'FrontEndCapstone')
        setLoading(true)
        const res = await fetch(
            'http://api.cloudinary.com/v1_1/dpg88yion/image/upload',
            {
                method: 'POST',
                body: data
            }
        )

        const file = await res.json()
        setPhotos(file.secure_url)
        setLoading(false)
    }

    return (
        <div>
            <h1>Upload Image</h1>
            <form>
                <label htmlFor="title">Title:</label>
                <input id="title" type="text" placeholder="Title" onChange={handleFieldChange}></input>
                <label htmlFor="description">Description:</label>
                <input id="description" type="text" placeholder="Description" onChange={handleFieldChange}></input>
                <input 
                    type="file"
                    name="file"
                    id="photoUrl"
                    placeholder="Upload an image"
                    onChange={uploadImage}
                />
            </form>
            <button disabled={loading} onClick={postNewImage}>Post Image</button>
        </div>
    )
}

export default SharedPhotosCloudinary