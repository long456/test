create database wunderlist2;
use wunderlist2;
create table users (
id int NOT NULL AUTO_INCREMENT,
name varchar(20) NOT NULL,
matkhau varchar(20) NOT NULL,
PRIMARY KEY (id)

);
create table list (
id int NOT NULL AUTO_INCREMENT,
name varchar(20) NOT NULL,
users_id int NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (users_id) REFERENCES users (id)
);
create table task (
id int NOT NULL AUTO_INCREMENT,
name varchar(20) NOT NULL,
list_id int NOT NULL,
status varchar(5) NOT NULL,
note varchar(225) ,
date date,
time datetime,
PRIMARY KEY (id),
FOREIGN KEY (list_id) REFERENCES list (id)
);
create table sub_task(
id int NOT NULL AUTO_INCREMENT,
name varchar(20) NOT NULL,
task_id int NOT NULL,
status varchar(5) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (task_id) REFERENCES task (id)
);
create table file (
id int NOT NULL AUTO_INCREMENT,
task_id int NOT NULL,
link varchar(225),
PRIMARY KEY (id),
FOREIGN KEY (task_id) REFERENCES task (id)
);
create table comment (
id int NOT NULL AUTO_INCREMENT,
name varchar(20) NOT NULL,
task_id int NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (task_id) REFERENCES task (id)
);
create table acount_setting (
id int NOT NULL AUTO_INCREMENT,
name varchar(20) NOT NULL,
password varchar(20) NOT NULL,
users_id int NOT NULL,
language varchar(20) NOT NULL,
dateformat varchar(20) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (users_id) REFERENCES users (id)
);

