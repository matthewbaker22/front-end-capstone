import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'
import Albums from './albums/AlbumsCard'
import AlbumList from './albums/AlbumsList'
import AlbumForm from './albums/AlbumForm'
import Photos from './albums/AlbumPhotos'

//Login & Register
import Login from './auth/Login'
import Register from './auth/Register'

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
            <Route path="/login" render={props => {
                return <Login {...props} />
            }}/>
            <Route path="/register" render={props => {
                return <Register {...props}/>
            }}/>
        </>
    )
}

export default ApplicationView