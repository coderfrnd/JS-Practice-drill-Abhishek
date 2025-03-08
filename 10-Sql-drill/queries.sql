CREATE TABLE organization (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
CREATE TABLE channel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    organization_id INT,
    FOREIGN KEY (organization_id) REFERENCES organization(id)
);
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
CREATE TABLE channelUserRelation (
    user_id INT,
    channel_id INT,
    FOREIGN KEY (channel_id) REFERENCES channel(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);
CREATE TABLE message (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content VARCHAR(255),
    post_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_id INT,
    channel_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (channel_id) REFERENCES channel(id)
);
INSERT INTO organization (name)
VALUES ("Lambda School");
INSERT INTO user (name)
VALUES ("Alice"), ("Bob"), ("Chris");

INSERT INTO channel (name, organization_id)
VALUES ("#general", 1), ("#random", 1);

INSERT INTO channelUserRelation (user_id, channel_id)
VALUES (1, 1), (1, 2), (2, 1), (3, 1);

INSERT INTO message (content, user_id, channel_id)
VALUES 
("Alice in the #general channel", 1, 1),
("Alice in the #random channel", 1, 2),
("Chris in the #random channel", 3, 2),
("Chris in the #general channel", 3, 1),
("Alice in the #random channel (2nd time)", 1, 2),
("Alice in the #general channel (2nd time)", 1, 1),
("Bob in the #random channel (1st time)", 2, 2),
("Bob in the #general channel (1st time)", 2, 1),
("Chris in the #random channel (2nd time)", 3, 2),
("Chris in the #general channel (2nd time)", 3, 1);



-- List all organization names
SELECT name FROM organization;

--  List all channel names
SELECT name FROM channel;

--  List all channels in a specific organization by organization name
SELECT 
    c.name AS channel_name, 
    o.name AS organization_name 
FROM Channel AS c
LEFT JOIN organization AS o 
ON c.organization_id = o.id;

--List all messages in a specific channel by channel name #general in order of post_time, descending. (Hint: ORDER BY. Because your INSERTs might have all taken place at the exact same time, this might not return meaningful results. But humor us with the ORDER BY anyway.)
  

SELECT 
    m.content, 
    m.post_time, 
    c.name AS channel_name
FROM message AS m
JOIN channel AS c ON m.channel_id = c.id
WHERE c.name = "#general"
ORDER BY m.post_time DESC;

--  List all channels to which user Alice belongs
SELECT DISTINCT 
    c.name AS channel_name, 
    u.name AS user_name
FROM channel AS c
JOIN channelUserRelation AS cur ON c.id = cur.channel_id
JOIN user AS u ON u.id = cur.user_id
WHERE u.name = 'Alice';

--  List all users that belong to the #general channel
SELECT u.name AS user_name 
FROM channel AS c
JOIN channelUserRelation AS cur ON c.id = cur.channel_id
JOIN user AS u ON u.id = cur.user_id
WHERE c.name = "#general";

--  List all messages in all channels by user Alice
SELECT 
    m.content AS message_content, 
    c.name AS channel_name
FROM message AS m
JOIN user AS u ON m.user_id = u.id
JOIN channel AS c ON c.id = m.channel_id
WHERE u.name = 'Alice';

--  List all messages in #random by user Bob
SELECT 
    m.content AS message_text, 
    c.name AS channel_title
FROM message AS m
JOIN user AS u ON m.user_id = u.id
JOIN channel AS c ON c.id = m.channel_id
WHERE u.name = 'Bob' AND c.name = '#random';

-- List the count of messages across all channels per user. (Hint: COUNT, GROUP BY.)
-- The title of the user's name column should be User Name and the title of the count column should be Message Count. (The SQLite commands .mode column and .header on might be useful here.)
-- The user names should be listed in reverse alphabetical order.

SELECT 
    u.name AS user_name, 
    COUNT(m.content) AS message_count
FROM Message AS m
JOIN User AS u ON m.user_id = u.id
JOIN Channel AS c ON c.id = m.channel_id
GROUP BY u.name
ORDER BY u.name DESC;

--  List the count of messages per user per channel
SELECT 
    u.name AS user_name, 
    c.name AS channel_name, 
    COUNT(m.content) AS message_count
FROM Message AS m
JOIN User AS u ON m.user_id = u.id
JOIN Channel AS c ON c.id = m.channel_id
GROUP BY u.name, c.name;

-- What SQL keywords or concept would you use if you wanted to automatically delete all messages by a user if that user were deleted from the user table?
-- Ans -- ON DELETE CASCADE is the keyword which we can use in message table in userid constraint