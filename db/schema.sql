DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burgername VARCHAR(4255) NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);

