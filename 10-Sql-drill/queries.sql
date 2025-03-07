CREATE TABLE organization(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
CREATE TABLE channel(
     name VARCHAR(255) NOT NULL,
     channelId INT AUTO_INCREMENT PRIMARY KEY,,
     organizationId INT,
     Foreign key (organizationId) References organization(id)  
);

CREATE TABLE user(
     name VARCHAR(255) NOT NULL,
     userId  INT AUTO_INCREMENT PRIMARY KEY,,
     channelID INT,
     Foreign key (channelID) References channel(channelID)  
);

Create TABLE channelUserRelation(
    userId INT,
    channelId INT,
     Foreign key (channelID) References channel(channelID),  
     Foreign key (userId) References user(userId)
) ;
CREATE TABLE message(
     post_time datetime Default CURRENT_TIMESTAMP,
     content VARCHAR(255),
     messageID INT AUTO_INCREMENT PRIMARY KEY,,
     userId INT,
     Foreign Key(userId) References user(userId)
);
INSERT INTO organization(id,name)
Values("Lambda School")



select * from organization
