import React, { Component } from 'react';

import CommentsApi from './../../api/CommentsApi';
import Comment from './Comment';
import CommentForm from './CommentForm';



class CommentList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            comments : []
        };
    }

    async createComment(commentData) {
        try {
            const response = await CommentsApi.createComment(commentData);
            const comment = response.data;
            const newComments = this.state.comments.concat(comment);

            this.setState({
                comments: newComments,
            });
        } catch (e) {
            console.error(e);
        }
    }

    async deleteComment(comment) {
        try {
            await CommentsApi.deleteComment(comment.id);
            const newComments = this.state.comments.filter(c => c.id !== comment.id);
            this.setState({
                comments: newComments,
            });
        } catch (e) {
            console.error(e);
        }
    }

    render(){
        const comments = this.state.comments;
        return(
            <div>
                <CommentForm onSubmit={(commentData) =>  this.createComment(commentData)  }/>
                {comments.map(comment => 
                    <Comment key={comment.id} comment={comment} onDeleteClick={() => this.deleteComment(comment)}/>

                    )}
        </div>

        )
       
    }
}

    
export default CommentList;