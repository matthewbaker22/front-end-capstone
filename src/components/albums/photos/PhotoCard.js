import React from 'react'
import { Link } from "react-router-dom"
import { Card, CardBody, Button } from 'reactstrap'

const PhotosCard = (props) => {
    

    return (
        <div>
            <Card>
                <CardBody>
                    <img width="250px" height="150px" src={props.photo.url}></img>
                    <h3>{props.photo.title}</h3>
                    <p>{props.photo.description}</p>
                    <Button color="danger" type="button" onClick={() => {
                        props.deletePhoto(props.photo.id)
                    }}>
                        Delete Photo
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default PhotosCard