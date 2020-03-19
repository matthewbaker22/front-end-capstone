import React from 'react'
import { Card, CardBody } from 'reactstrap'

const AlbumsCard = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <p>{props.album.name}</p>
                    <p>{props.album.description}</p>
                </CardBody>
            </Card>
        </div>
    )
}

export default AlbumsCard