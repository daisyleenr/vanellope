# vanellope
Journal &amp; Mood Tracker

# Run dev server
```
$ yarn install
$ yarn dev
```

# Test
```
$ yarn test
```

# Requirements
### .env file
프로젝트 폴더 안에 .env 파일을 생성하고 DB 설정을 넣어줍니다.
```
$ vi .env

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=vanellope_test

TEST_DB_HOST=localhost
TEST_DB_USER=root
TEST_DB_PASSWORD=
TEST_DB_NAME=vanellope_test
```
### Install MySQL
MySql이 설치 되어있어야 합니다. [설치 링크](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

### Import Tables
데이터베이스 생성 후 db_schema.sql 파일을 import 합니다.
```
$ mysql -u root -p
> create database vanellope_test;
> exit

$ mysql -u root -p vanellope_test < db_schema.sql
```