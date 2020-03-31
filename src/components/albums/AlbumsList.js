import React, { useState, useEffect } from 'react'
import AlbumsCard from './AlbumsCard'
import { Button, Input, Card } from 'reactstrap'
import { Link } from 'react-router-dom'
import AlbumsManager from '../../modules/AlbumsManager'
import './AlbumCard.css'

const AlbumList = (props) => {
    const [albums, setAlbums] = useState([])

    
    const deleteAlbum = (id) => {
        AlbumsManager.delete(id).then(() =>
            AlbumsManager.getAll().then(setAlbums)
        )
    }

    const getAlbums = () => {
        return AlbumsManager.getAll().then(albumsFromAPI => {
            setAlbums(albumsFromAPI)
        })
    }

    

    

    useEffect(() => {
        getAlbums()
    }, [])

    return (
        <>
            <section>
                <Button color="primary" type="button" className="btn" onClick={() => {
                    props.history.push("albums/new")
                }}>Create Album
                </Button>
            </section>
            <div className="album-flex">
                {albums.map(album => (
                    
                        <AlbumsCard 
                            key={album.id}
                            album={album}
                            deleteAlbum={deleteAlbum}
                            {...props}
                        />
                    
                ))}
            </div>   
        </>
    )
}

export default AlbumList


