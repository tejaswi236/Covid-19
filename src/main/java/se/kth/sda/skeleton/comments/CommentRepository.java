package se.kth.sda.skeleton.comments;

import org.springframework.data.repository.CrudRepository;
import se.kth.sda.skeleton.posts.Post;

import java.util.List;


public interface CommentRepository extends CrudRepository<Comment, Long> {

}

