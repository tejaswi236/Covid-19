package se.kth.sda.skeleton.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
    @TODO AutoWire PostService and create the methods needed to implement the API.
    Don't forget to add necessary annotations.
 */
@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    public PostService postService;

    @PostMapping("")
    public Post create(@RequestBody Post newPost){
        return postService.save(newPost);
    }

}
