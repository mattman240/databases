DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int auto_increment,
  message varchar(300),
  roomname varchar(40),
  username varchar(50) REFERENCES users(id),
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
 --  insert into users (id, username) values
 --    (0,'weHateSql69');
    
 -- insert into messages (id, messages, userID) values 
 --    (0, 'trololololololololol', 0)
 --    