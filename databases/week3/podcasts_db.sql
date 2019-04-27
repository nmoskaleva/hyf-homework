use podcasts_db;

SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS `user` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE IF NOT EXISTS `podcast` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE IF NOT EXISTS `user_podcast` (
    `user_id` INT(10) UNSIGNED NOT NULL,
    `podcast_id` INT(10) UNSIGNED NOT NULL,
    PRIMARY KEY (`user_id` , `podcast_id`),
    CONSTRAINT `fk_user` FOREIGN KEY (`user_id`)
        REFERENCES `user` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_podcast` FOREIGN KEY (`podcast_id`)
        REFERENCES `podcast` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

#users
insert into user (id, username, email) values (1, 'kant', 'imm.kant@gmail.com');
insert into user (id, username, email) values (2, 'hegel', 'g.hegel@gmail.com');
insert into user (id, username, email) values (3, 'nietzsche', 'f.nietzsche@gmail.com');
insert into user (id, username, email) values (4, 'marx', 'ka.marx@gmail.com');
insert into user (id, username, email) values (5, 'heidegger', 'ma.heidegger@gmail.com');
insert into user (id, username, email) values (6, 'sartre', 'jp.sartre@gmail.com');
insert into user (id, username, email) values (7, 'foucault', 'm.foucault@gmail.com');
insert into user (id, username, email) values (8, 'bourdieu', 'p.bourdieu@gmail.com');
insert into user (id, username, email) values (9, 'habermas', 'j.habermas@gmail.com');
insert into user (id, username, email) values (10, 'freud', 's.freud@gmail.com');
insert into user (id, username, email) values (11, 'arendt', 'h.arendt@gmail.com');
insert into user (id, username, email) values (12, 'schopenhauer', 'a.schopenhauer@gmail.com');
insert into user (id, username, email) values (13, 'goethe', 'jw.goethe@gmail.com');
insert into user (id, username, email) values (14, 'gramsci', 'a.gramsci@gmail.com');
insert into user (id, username, email) values (15, 'adorno', 't.adorno@gmail.com');
insert into user (id, username, email) values (16, 'zizek', 's.zizek@gmail.com');
insert into user (id, username, email) values (17, 'chomsky', 'n.chomsky@gmail.com');

#podcasts
insert into podcast (id, title) values (100, 'The Art of Being Right'); #schop
insert into podcast (id, title) values (101, 'The Divided West');
insert into podcast (id, title) values (102, 'Critique of pure reason');
insert into podcast (id, title) values (103, 'How about idealism?');
insert into podcast (id, title) values (104, 'Ubermensch');
insert into podcast (id, title) values (105, 'The Communist Manifesto');
insert into podcast (id, title) values (106, 'Theory of Colours'); #goethe shopenh
insert into podcast (id, title) values (107, 'My first PPT presentation'); 
insert into podcast (id, title) values (108, 'Arendt on totalitarianism');
insert into podcast (id, title) values (109, 'Theory of music');
insert into podcast (id, title) values (110, 'Understanding Power'); #chomsky
insert into podcast (id, title) values (111, 'Sweet dreams');
insert into podcast (id, title) values (112, 'Panopticon');
insert into podcast (id, title) values (113, 'A revolutionary today'); #zizek 
insert into podcast (id, title) values (114, 'Chomsky vs Zizek');

#user_podcast
insert into user_podcast (user_id, podcast_id) values (1, 103);
insert into user_podcast (user_id, podcast_id) values (2, 103);
insert into user_podcast (user_id, podcast_id) values (3, 104);
insert into user_podcast (user_id, podcast_id) values (4, 105);
insert into user_podcast (user_id, podcast_id) values (4, 113);
insert into user_podcast (user_id, podcast_id) values (7, 112);
insert into user_podcast (user_id, podcast_id) values (9, 101);
insert into user_podcast (user_id, podcast_id) values (10, 111);
insert into user_podcast (user_id, podcast_id) values (11, 108);
insert into user_podcast (user_id, podcast_id) values (12, 100);
insert into user_podcast (user_id, podcast_id) values (12, 106);
insert into user_podcast (user_id, podcast_id) values (13, 106);
insert into user_podcast (user_id, podcast_id) values (14, 113);
insert into user_podcast (user_id, podcast_id) values (15, 113);
insert into user_podcast (user_id, podcast_id) values (15, 109);
insert into user_podcast (user_id, podcast_id) values (16, 113);
insert into user_podcast (user_id, podcast_id) values (16, 114);
insert into user_podcast (user_id, podcast_id) values (17, 107);
insert into user_podcast (user_id, podcast_id) values (17, 110);
insert into user_podcast (user_id, podcast_id) values (17, 114);

SELECT *
FROM user JOIN
    user_podcast ON user.id = user_podcast.user_id
        JOIN
    podcast ON podcast.id = user_podcast.podcast_id
WHERE
    user.id = 16;

insert into podcast (title) values ('I am a podcast');
    
