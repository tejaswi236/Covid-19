import React, { Component } from 'react';

function Comment({comment, onDeleteClick}) {
    return(
         <div className="card mt-3">
             <div className="card-body">
                <p>
                    {comment.body}
                </p>
            </div>

        </div>
     )
}


export default Comment;
