package se.kth.sda.skeleton.comments;

import org.springframework.stereotype.Service;

@Service
public class CommentService {
    public CommentRepository commentRepository;


    public Comment create(Comment comment) {
        return commentRepository.save(comment);
    }

}