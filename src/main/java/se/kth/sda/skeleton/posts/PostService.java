package se.kth.sda.skeleton.posts;
import se.kth.sda.skeleton.comments.Comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.persistence.*;

import java.util.List;
import java.util.Optional;


@Service
public class PostService {

    @Autowired
    public PostRepository repository;
    public List<Post> getAll() {
        // @TODO get all posts and return them as List<Post>
        return null;
    }

    public Optional<Post> getByID(Long id) {
        // @TODO get a post by ID if it exists
        return null;
    }

    public Post save(Post post) {
        return repository.save(post);
    }

    public Optional<Post> update(Post post) {
        // @TODO update the post if it exists in DB and return the updated post.
        return null;
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
