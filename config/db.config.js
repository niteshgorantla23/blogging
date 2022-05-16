'user strict';

const mysql = require('mysql2');

//local mysql db connection
// Set your database configure 
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'rubric' // Also create Database with this name in phpmyadmin
});
dbConn.connect(function(err) {
    if (err) {
    return console.error('error: ' + err.message);
  }
})
    

    // CREATE  TABLE IF NOT EXISTS `blogs` (
    //   `id` BIGINT UNSIGNED AUTO_INCREMENT,
    //   `user_name` VARCHAR(255) NOT NULL,
    //   `title` VARCHAR(255) NOT NULL,
    //   `auther` VARCHAR(255) NOT NULL,
    //   `article` VARCHAR(50) NOT NULL,
    //   PRIMARY KEY (`id`))
    // ENGINE = InnoDB;


module.exports = dbConn;