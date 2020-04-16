create table "Tweet Category" 
("Tweet ID" VARCHAR(10),
"Tweet Category" VARCHAR(30));

select * from "Tweet Category";

create table "Netflix Tweets" (
"Tweet Rank" SERIAL PRIMARY KEY,
"Tweet ID" VARCHAR(10),
Tweet VARCHAR(500)
);

select * from "Netflix Tweets";

create table "NRA Tweets" (
"Tweet Rank" SERIAL PRIMARY KEY,
"Tweet ID" VARCHAR(10),
Tweet VARCHAR(500)
);

select * from "NRA Tweets";

create table "CDC Tweets" (
"Tweet Rank" SERIAL PRIMARY KEY,
"Tweet ID" VARCHAR(10),
Tweet VARCHAR(500)
);

select * from "CDC Tweets";