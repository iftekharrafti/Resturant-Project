import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardBody } from 'reactstrap';
import LoadComments from './LoadComments';

const MenuDetails = props => {
    return(
        <div>
            <Card className="mt-3">
                <CardImg src={props.dish.image} />
                <CardBody style={{textAlign: 'left'}} className="menu-details-body">
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    <CardText>{props.dish.price}</CardText>
                    <hr />
                    <LoadComments comments={props.dish.comments} />
                </CardBody>
            </Card>
        </div>
    )
}

export default MenuDetails;