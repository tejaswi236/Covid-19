package se.kth.sda.skeleton.comments;

import se.kth.sda.skeleton.posts.Post;

import javax.persistence.*;

@Entity
@Table (name = "comment")
public class Comment {
    @Column (name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column (name = "body")
    private String body;

   // @ManyToOne

    public void setId(Long id) {
        this.id = id;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Long getId() {
        return id;
    }

    public String getBody() {
        return body;
    }

    public Comment() {

    }

    public Comment(Long id, String body) {
        this.id = id;
        this.body = body;
    }
    /* private Post post;

    public Comment(String body, Post post) {
        this.body = body;
        this.post = post;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    } */



}
