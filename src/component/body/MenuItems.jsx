import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay,CardBody } from 'reactstrap';
import './body.style.css';

const MenuItems = props => {
    return(
        <div>
            <Card style={{margin:'15px',padding:'15px'}}>
                <CardImg 
                    src={props.dish.image} 
                    width="100%"
                    height="330px" 
                    alt={props.dish.name}
                    className="main-img" />
                <CardBody>
                    <CardImgOverlay>
                        <CardTitle 
                            className="card-title"
                            onClick={props.DishSelect}
                        >
                                {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default MenuItems;