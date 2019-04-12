USE week_2_db;

SET NAMES utf8mb4;

# creating student table
CREATE TABLE IF NOT EXISTS `student`(
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NOT NULL,
`email` varchar(255) NOT NULL,
`phone` varchar(255) NOT NULL,
`class_id` int(10) unsigned NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

# creating course table
CREATE TABLE IF NOT EXISTS `course`(
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NOT NULL,
`description` text NULL DEFAULT NULL,
`teacher` varchar(255) NULL DEFAULT NULL,
`duration_in_weeks` int(10)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

# student_course table, many to many
CREATE TABLE IF NOT EXISTS `student_course`(
`student_id` int(10) unsigned NOT NULL,
`course_id` int(10) unsigned NOT NULL,
PRIMARY KEY (`student_id`, `course_id`),
CONSTRAINT `fk_student` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `fk_course` FOREIGN KEY (`course_id`) REFERENCES `course`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- Students
insert into student (id, name, email, phone, class_id) values(085, 'Natalia', 'nat@gmail.com', '111-22-33', '08');
insert into student (id, name, email, phone, class_id) values (086, 'Keerthi', 'kee@gmail.com', '222-33-44', '08');
insert into student (id, name, email, phone, class_id) values (073, 'Badr', 'badr@gmail.com', '333-44-55', '07');
insert into student(id, name, email, phone, class_id) values (074, 'Yana', 'yana@gmaio.com', '444-55-66', '07');
insert into student (id, name, email, phone, class_id) values (098, 'Anna', 'anna@gmail.com', '222-33-44', '09');

-- Courses
insert into course (id, name, description, teacher, duration_in_weeks) values (01, 'html css', 'basics of HTML and CSS', 'Zaki', 3);
insert into course (id, name, description, teacher, duration_in_weeks) values (02, 'JS part 1', NULL, 'Rasmus', 3);
insert into course (id, name, description, teacher, duration_in_weeks) values (03, 'JS part 2', NULL, 'Benjamin', 3);
insert into course (id, name, description, teacher, duration_in_weeks) values (04, 'JS part 1', 'advanced Java Script', 'Benjamin', 3);
insert into course (id, name, description, teacher, duration_in_weeks) values (05, 'Node.js', NULL, 'Abed', 5);
insert into course (id, name, description, teacher, duration_in_weeks) values (06, 'Databases', 'understanding databases', 'Marta', 3);
insert into course (id, name, description, duration_in_weeks) values (111, 'Final Project', 'advanced', 5);

-- Students-Courses
insert into student_course (student_id, course_id) values (086, 06);
insert into student_course (student_id, course_id) values (085, 06);
insert into student_course (student_id, course_id) values (073, 111);
insert into student_course (student_id, course_id) values (074, 111);
insert into student_course (student_id, course_id) values (098, 01);


-- selecting students taking Databases course
SELECT student.name, student.email, student.class_id, course.name, course.duration_in_weeks
FROM student 
	JOIN student_course ON student.id = student_course.student_id
    JOIN course ON course.id = student_course.course_id
    WHERE class_id = 8;

-- remove one column from one of the tables
ALTER TABLE student DROP COLUMN phone;
SELECT *
FROM student;

-- change the data type for one column in one of the tables
ALTER TABLE course
MODIFY COLUMN description varchar(255);

-- add a new column to one of the tables with a default value.
ALTER TABLE course 
ADD created year
DEFAULT 2018;

-- modify two entries (rows) in one of the tables
UPDATE student
SET email = 'newanna@gmail.com', class_id = 08
WHERE id = 98;

UPDATE student
SET email = 'keerthi@gmail.com', id = 087
WHERE id = 086;

-- delete two entries in one of the tables
DELETE 
FROM student
WHERE id = 98;

SELECT *
FROM student;

-- add an index to one of the columns in one of the tables
SHOW INDEX FROM student;
CREATE INDEX idx_name 
ON student (name);