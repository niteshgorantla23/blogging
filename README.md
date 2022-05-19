# Rubric
## Description

My Web Application is a Blogging Application where the user can create an account and then log in where it shows a blogging home page. At blogging home page it shows the lists of different articles. The user can select the articles according to its need it shows the complete detail of the article and its writer. The user can also write articles by clicking the create blog option mentioned above. The created articles are displayed on the home page. The user can select their own articles by clicking the My blogs option. The user can also delete their own articles. 
## Bugs & Issues
There's no bug or any issue. 

## Languages & Technologies 

| Frontend  | Backend |
| ------------- | ------------- |
| Js (JavaScript)  | Node js  |
| Es6 (ECMA Script)  | Express js  |
| React  | Axios  |
| Css  | MYSQL  |
| React-Bootstrap  | phpmyadmin  |
| LocalStorage  | Nodemon  |


## ERD Diagram
<a href="https://ibb.co/zRNZZxx"><img src="https://i.ibb.co/YkbhhQQ/Erd-Diagram.jpg" alt="Erd-Diagram" border="0"></a>

## Requirments

You need these tools to run this project

```bash
npm
node
mysql
```

## Installation


1: First clone
```bash
git clone https://github.com/Anishali2/Rubric
```
2: run this command in root_directory/frontend
```bash
npm install
```
3: Create database with the name of "rubric" in phpmyadmin
```bash
CREATE DATABASE "rubric"
```
4: Setup the configuration of database in root_directory/config/db.config.js
```bash

  host     : 'localhost', #localhost
  user     : 'admin',     #username of your database
  password : 'admin',     #password of your database
  database : 'rubric'     #database name

```
5: add "root_directory/database/rubric.sql" file to mysql it will automatically create tables and sample data 
```bash
root_directory/database/rubric.sql
```
6: run command in "root_directory/"
```bash
npm start
```
7: run command in "root_directory/frontend"
```bash
npm start
```
### Finally your project will be work fine!
