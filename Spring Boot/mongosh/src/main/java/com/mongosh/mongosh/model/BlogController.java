package com.mongosh.mongosh.model;

import com.mongosh.mongosh.dao.BlogRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")

public class BlogController {

    @Autowired
    private BlogRepository blogRepository;

    @PostMapping("/addBlog")
    public String addBlog(@RequestBody Blog blog){
        try {
            System.out.println("Here the blog is get added");
            blog.setId(new ObjectId().toString());
            blogRepository.save(blog);
            return "Blog has been added with the id " + blog.getId();
        }catch (Exception e){
            return "Error is : "+e.toString();
        }
    }

    @GetMapping("/getBlog")
    public List<Blog> getBlog(){
        System.out.println("list of Blogs are displayed");
        return blogRepository.findAll();
    }

    @GetMapping("/getBlogById/{id}")
    public Blog getBlogById(@PathVariable String id){

        boolean exists = blogRepository.existsById(id);
        Optional<Blog> blog1 = blogRepository.findById(id);

        return blog1.get();
    }


    @PutMapping("/updateById/{id}")
    public String updateBlog(@PathVariable String id,@RequestBody Blog blog){
            boolean exists = blogRepository.existsById(id);
            Optional<Blog> blog1 = blogRepository.findById(id);

            if (!exists) {
                return "The Blog does not exist with the id: " + id;
            }

            blog1.get().setTitle(blog.getTitle());
            blog1.get().setAuthor(blog.getAuthor());
            blog1.get().setBody(blog.getBody());
            blogRepository.save(blog1.get());

        return "Blog Updated with id : "+id;

    }

    @DeleteMapping("/delete/{id}")
    public String deleteBlog(@PathVariable String id){
        blogRepository.deleteById(id);
        return "Blog deleted with id "+id;
    }

}










