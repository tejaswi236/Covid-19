import React from "react";
import CommentList from '../comments/CommentList';

function PostCard({post, onDeleteClick}) {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <p>
                    {post.body}
                </p>

                <button className="btn btn-danger" onClick={onDeleteClick}>Delete</button>
                <div className="comment-body">
                    <CommentList />
                </div>
            </div>
            
        </div>
    );
}

export default PostCard;