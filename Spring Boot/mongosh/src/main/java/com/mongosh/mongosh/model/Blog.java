package com.mongosh.mongosh.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Blog {
    @Id
    private String id;
    private String title;
    private String author;
    private String body;
}