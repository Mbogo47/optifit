CREATE DATABASE gymDB
use gymDB

-- Customer Table
CREATE TABLE users (
  userId INT IDENTITY(1, 1) PRIMARY KEY,
  userName VARCHAR(50),
  email VARCHAR(100),
  password VARCHAR(MAX)
);
