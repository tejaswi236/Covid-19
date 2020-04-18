import React, { Component } from 'react';

import Comment from './Comment';

class CommentList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            comment : []
        };
    }

    render(){
        return(
            <div>
                <Comment onSubmit={(comment) => this.createComment(comment)}/>

            </div>
        )
    }
}
/*
                 {comments.map(comment => 
                   <Comment key={post.id} comment={comment} onDeleteClick={() => this.deleteComment(comment)}/>
                )}
                */
export default CommentList;