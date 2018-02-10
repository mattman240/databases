DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int auto_increment,
  messages varchar(300),
  userID int(3) REFERENCES users(id),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  /* Describe your table here.*/
  id int auto_increment,
  username varchar(30),
  primary key (id)
);

-- create table students (name varchar(20), 
-- age int(3), campus varchar(20), id int auto_increment, primary key (id)  );


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

