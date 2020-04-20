package se.kth.sda.skeleton.comments;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Long> {
    default List<Comment> findAllByPostId(Long postId) {
        return null;
    }
}
