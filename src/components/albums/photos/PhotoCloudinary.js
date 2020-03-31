import React, { useState, useEffect } from 'react'
import PhotosManager from '../../../modules/PhotosManager'
import PhotosCard from './PhotoCard'

const Cloudinary = (props) => {
    const [newImage, setNewImage] = useState({title: "", description: "", userId: "", photoUrl: ""})
    const [photos, setPhotos] = useState("")
    const[loading, setLoading] = useState(false)
    const activeUser = JSON.parse(sessionStorage.getItem("Active Id"))

    const handleFieldChange = evt => {
        const stateToChange = {...newImage}
        stateToChange[evt.target.id] = evt.target.value
        setNewImage(stateToChange)
    }

    const postNewImage = evt => {
        evt.preventDefault()
        console.log(photos)

        setLoading(true)
        const Photo = {
            title: newImage.title,
            description: newImage.description,
            userId: activeUser.id,
            photoUrl: photos,
            albumId: parseInt(props.match.params.albumId)
        }
        PhotosManager.addNewPhoto(Photo).then(() => props.history.push(`/albums/${props.match.params.albumId}`))
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

    const getPhotos = () => {
        return PhotosManager.getAll().then(photosFromAPI => {
            setPhotos(photosFromAPI)
        })
    }

    useEffect(() => {
        // getPhotos()
    }, [])

    return (
        <div>
            <h1>Upload Image</h1>
            <form>
                <label htmlFor="title">Title:</label>
                <input id="title" type="text" placeholder="Title" onChange={handleFieldChange}/>
                <label htmlForm="description">Description:</label>
                <input id="description" type="text" placeholder="Description" onChange={handleFieldChange}/>
                <input 
                    type="file"
                    name="file"
                    id="photoUrl"
                    placeholder="Upload an image"
                    onChange={uploadImage}
                />
            </form>
            <button disabled={loading} onClick={postNewImage}>Post Image</button>
            <div>
                <img src={photos} style={{width: '300px'}} />
                
            </div>
        </div>
    )
}

export default Cloudinary