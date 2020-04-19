import Api from "./Api";

class CommentsApi {

    createComment(comment) {
        return Api.post('/comments', comment);
    }

}

export default new CommentsApi();