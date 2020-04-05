import React, { useState, useEffect } from 'react'
import SharedAlbumsManager from '../../modules/SharedAlbumsManager'
import SharedAlbumsCard from '../sharedalbums/SharedAlbumsCard'

const SharedAlbumsList = (props) => {

    const [sharedAlbums, setSharedAlbums] = useState([])

    const getSharedAlbums = () => {
        return SharedAlbumsManager.getAll().then(sharedAlbumsFromAPI => {
            console.log(sharedAlbumsFromAPI)
            const mySharedAlbums = sharedAlbumsFromAPI.filter(sharedAlbumFromAPI => sharedAlbumFromAPI.friend.friendId === parseInt(sessionStorage.getItem("Active Id")) || sharedAlbumFromAPI.friend.userId === parseInt(sessionStorage.getItem("Active Id")))
            console.log(parseInt(sessionStorage.getItem("Active Id")))
            setSharedAlbums(mySharedAlbums)
            console.log(sharedAlbums)
        })
    }

    useEffect(() => {
        getSharedAlbums()
    }, [])

    return (
        <div className="album-flex">
                {sharedAlbums.map(sharedAlbum => (
                    
                        <SharedAlbumsCard 
                            key={sharedAlbum.id}
                            sharedAlbum={sharedAlbum}
                            {...props}
                        />
                    
                ))}
            </div> 
    )
}

export default SharedAlbumsList