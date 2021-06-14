import React from 'react';

const LoadComments = props => {
    return(
        props.comments.map(comment =>{
            return(
            <div key={comment.id}>
                <h3>{comment.author}</h3>
                <p>{comment.comment}</p>
                <p>{comment.date}</p>
            </div>
            )
        })
    )
}

export default LoadComments;