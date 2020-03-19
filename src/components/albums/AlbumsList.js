import React, { useState, useEffect } from 'react'
import AlbumsCard from './AlbumsCard'
import { Button, Input, Card } from 'reactstrap'
import { Link } from 'react-router-dom'
import AlbumsManager from '../../modules/AlbumsManager'

const AlbumList = (props) => {
    const [albums, setAlbums] = useState([])

    const getAlbums = () => {
        return AlbumsManager.getAll().then(albumsFromAPI => {
            setAlbums(albumsFromAPI)
            console.log(albumsFromAPI)
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
                }}>Create Album</Button>
                
                <Link className="album-link" to="/albums/1">
                    <Card>
                        {albums.map(album => (
                            <AlbumsCard 
                                key={album.id}
                                album={album}
                                {...props}
                            />
                        ))}
                    </Card> 
                </Link> 
            </section>
        </>
    )
}

export default AlbumList