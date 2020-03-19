import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'
import Albums from './albums/AlbumsCard'
import AlbumList from './albums/AlbumsList'
import AlbumForm from './albums/AlbumForm'
import Photos from './albums/AlbumPhotos'

const ApplicationView = (props) => {
    return (
        <>
            <Route exact path="/home" render={props => {
                return <Home />
            }}/>
            <Route exact path ="/albums" render={props => {
                return <AlbumList {...props}/>
            }}/>
            <Route path="/albums/1" render={props => {
                return <Photos />
            }}/>
            <Route path="/albums/new" render={props => {
                return <AlbumForm {...props}/>
            }}/>
        </>
    )
}

export default ApplicationView