import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'
import Albums from './albums/AlbumsCard'
import AlbumList from './albums/AlbumsList'
import AlbumForm from './albums/AlbumForm'
import PhotoCard from './albums/photos/PhotoCard'
import PhotoList from './albums/photos/PhotoList'
import Cloudinary from './albums/photos/PhotoCloudinary'
import AlbumEditForm from './albums/AlbumEditForm'
import PhotoEditForm from './albums/photos/PhotoEditForm'

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
            <Route path="/albums/new" render={props => {
                return <AlbumForm {...props}/>
            }}/>
            <Route path="/login" render={props => {
                console.log("In login route")
                return <Login {...props} />
            }}/>
            <Route path="/register" render={props => {
                return <Register {...props}/>
            }}/>
            <Route path="/albums/:albumId(\d+)/edit" render={props => {
                return <AlbumEditForm {...props}/>
            }}/>
            <Route path="/albums/:photoId(\d+)/photo/edit" render={props => {
                return <PhotoEditForm {...props}/>
            }}/>
            <Route exact path="/albums/:albumId(\d+)" render={props => {
                return <PhotoList {...props}/>
            }}/>
            <Route path="/albums/:albumId(\d+)/photo/new" render={props => {
                return <Cloudinary {...props}/>
            }}/>

        </>
    )
}

export default ApplicationView