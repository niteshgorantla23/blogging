# Rubric
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

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
