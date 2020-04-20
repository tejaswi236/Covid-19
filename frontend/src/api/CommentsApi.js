import Api from "./Api";

class CommentsApi {

    createComment(comment) {
        return Api.post('/comments', comment);
    }
    deleteComment(id) {
        return Api.delete('/comments/'+id);
    }

}

export default new CommentsApi();