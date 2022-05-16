'user strict';
var dbConn = require('./../../config/db.config');

//Blog object create
var Blog = function(blog){
    this.user_name      = blog.user_name;
    this.title          = blog.title;
    this.auther         = blog.auther;
    this.article        = blog.article;

};
Blog.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO blogs set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Blog.findById = function (id, result) {
    dbConn.query("Select * from blogs where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Blog.findAll = function (result) {
    dbConn.query("Select * from blogs", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('blogs : ', res);  
            result(null, res);
        }
    });   
};
Blog.update = function(id, blog, result){
  dbConn.query("UPDATE blogs SET user_name=?,title=?,auther=?,artical=? WHERE id = ?", 
  [blog.user_name,blog.title,blog.auther,blog.cover_img,blog.artical, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Blog.delete = function(id, result){
     dbConn.query("DELETE FROM blogs WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Blog;