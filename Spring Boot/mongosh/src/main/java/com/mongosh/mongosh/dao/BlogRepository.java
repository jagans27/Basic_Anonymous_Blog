package com.mongosh.mongosh.dao;

import com.mongosh.mongosh.model.Blog;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogRepository extends MongoRepository<Blog, String> {



}
