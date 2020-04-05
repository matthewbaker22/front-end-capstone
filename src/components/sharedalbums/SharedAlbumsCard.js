import React from 'react'
import { Card, CardBody, Button } from 'reactstrap'

const SharedAlbumsCard = (props) => {

    return (
        <div className="album-card">
            <Card className="album-flex">
                <CardBody className="hover-bcg">
                        <p className="album-title">{props.sharedAlbum.name}</p>
                        <p className="album-description"></p>
                </CardBody>
            </Card>
        </div>
    )
}

export default SharedAlbumsCard