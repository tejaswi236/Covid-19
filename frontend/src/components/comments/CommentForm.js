import React, { Component } from 'react';

import '../styles/styles.css';
import CommentList from './CommentList';

function CommentForm({onSubmit}) {
    const [body, setBody] = React.useState("");

    const handleSubmit = () => {
        // Invoke the passed in event callback
        onSubmit({body: body});

        setBody("");
    };

    return(
        <div className="card">
            <div className="card-body">
                <p className="card-title" >Write comments below</p>
                <div>
                    <div className="form-group">
                        <textarea 
                            className="form-control"
                            value={body}
                            onChange={e => setBody(e.target.value)} />
                    </div>


                    <div className="form-group">
                        <button 
                            className="btn btn-primary" 
                            onClick={handleSubmit}>
                            Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default CommentForm;
