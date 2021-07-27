import React from 'react';


function Comments({ comments }) {

    let commentArray = comments.map(comment => {
        return (
            <div> 
                <h4>{comment.user}</h4>
                <p>{comment.comment}</p>
            </div>
        )
    })
    return (
        <div>
            <h2>{comments.length} comments</h2>
            {commentArray}
        </div>
    )
}



export default Comments;