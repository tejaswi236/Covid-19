import React, { Component } from 'react';

import '../styles/styles.css';
import CommentList from './CommentList';

class CommentForm extends Component {
    render(){
        return(
            <div>
                <div className="form-group">
                    <h6 className="comment-container"><i class='far fa-comment-alt'></i> write comments below </h6>
                 </div>
                <div className="form-group">
                     <CommentList />
                </div>
                <div className="form-group">
                     <button className="btn btn-primary" >Add Comment</button>  
                </div>
            </div>
        )
    }
}

export default CommentForm;
