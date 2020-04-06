import React, { useState, useEffect } from 'react'
import SharedAlbumsManager from '../../modules/SharedAlbumsManager'
import SharedAlbumsCard from '../sharedalbums/SharedAlbumsCard'

const SharedAlbumsList = (props) => {

    const [sharedAlbums, setSharedAlbums] = useState([])

    const getSharedAlbums = () => {
        return SharedAlbumsManager.getAll().then(sharedAlbumsFromAPI => {
            const mySharedAlbums = sharedAlbumsFromAPI.filter(sharedAlbumFromAPI => sharedAlbumFromAPI.friend.friendId === parseInt(sessionStorage.getItem("Active Id")) || sharedAlbumFromAPI.friend.userId === parseInt(sessionStorage.getItem("Active Id")))
            setSharedAlbums(mySharedAlbums)
        })
    }

    useEffect(() => {
        getSharedAlbums()
    }, [])

    return (
        <div>
            <div>
                <h1>Shared Albums</h1>
            </div>
            <div className="album-flex">
                {sharedAlbums.map(sharedAlbum => (
                        <SharedAlbumsCard 
                            key={sharedAlbum.id}
                            sharedAlbum={sharedAlbum}
                            {...props}
                        />
                ))}
            </div> 
        </div>
    )
}

export default SharedAlbumsList