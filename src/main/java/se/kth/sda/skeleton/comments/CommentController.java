package se.kth.sda.skeleton.comments;

import org.springframework.web.bind.annotation.*;


@RestController
public class CommentController {
    private CommentService commentService;

    @PostMapping("/comments")
  public Comment postComment(@RequestBody Comment comment) {
      return commentService.create(comment);
  }
}