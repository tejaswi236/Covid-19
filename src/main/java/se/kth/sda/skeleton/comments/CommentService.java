package se.kth.sda.skeleton.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    @Autowired
    public CommentRepository commentRepository;


    public Comment create(Comment comment) {
        return commentRepository.save(comment);
    }

    public void deleteById(Long id) { commentRepository.deleteById(id);
    }

    public Iterable<Comment> getAll() {
        return commentRepository.findAll();
    }


}