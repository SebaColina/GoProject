-- init.sql
CREATE DATABASE IF NOT EXISTS mydatabase;

USE mydatabase;

CREATE TABLE IF NOT EXISTS Note (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);

-- Insert mock data
INSERT INTO Note (title, content) VALUES
('First Note', 'This is the content of the first note.'),
('Second Note', 'This is the content of the second note.'),
('Third Note', 'This is the content of the third note.'),
('Fourth Note', 'This is the content of the fourth note.'),
('Fifth Note', 'This is the content of the fifth note.'),
('Sixth Note', 'This is the content of the sixth note.');