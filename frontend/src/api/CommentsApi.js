import Api from "./Api";

class CommentsApi {

    createComment(comment) {
        return Api.post('/comments', comment);
    }
    deleteComment(id) {
        return Api.delete('/comments/'+id);
    }

    getAllComments(postId) {
            return Api.get('/comments/',postId);
        }

}

export default new CommentsApi();