import React from 'react'
import { Link } from "react-router-dom"
import { Card, CardBody, Button } from 'reactstrap'

const AlbumsCard = (props) => {

    return (
        <div>
            <Card>
                <CardBody>
                    <Link to={"/albums/" + props.album.id}>
                        <p>{props.album.name}</p>
                        <p>{props.album.description}</p>
                    </Link>
                    <Button color="danger" type="button" onClick={() =>
                        props.deleteAlbum(props.album.id)}>
                        Delete Album
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default AlbumsCard