package se.kth.sda.skeleton.comments;

import org.springframework.stereotype.Service;
import se.kth.sda.skeleton.posts.Post;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    public CommentRepository commentRepository;

   // public CommentService(CommentRepository commentRepository) {
   //     this.commentRepository = commentRepository;


    public Comment create(Comment comment) {
        return commentRepository.save(comment);
    }

  /*  public List<Comment> getAllByPost(Post post) {
        List<Comment> list = new ArrayList<>();
        commentRepository.findAllByPost(post).forEach(list::add);
        return list;
    }

    public Optional<Comment> getByID(long id) {
        return commentRepository.findById(id);
    }

    public Comment save(Comment comment, Post post) {
        post.addComment(comment);
       return commentRepository.save(comment);
    }

    public void deleteById(Long id) {
        commentRepository.deleteById(id);
    } */

}