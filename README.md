### CCAPDEV-Phase-3
# s15-mp1

# Big Brain Movies Movie Reservation System

## Team Members:

* OAFALLAS, Kenneth Neil B.
* JOYA, Patrick Jaspher B.
* CHUA CHIACO, Ronn Christian C.

---

## Heroku App Link

[https://bigbrainmovies.herokuapp.com/](https://bigbrainmovies.herokuapp.com/)

---

## Features
Phase 3 implements the following features:
- all views
- all routes and navigation between views
- retrieval of all dynamic data from online MongoDB database
- basic user authentication, access control and session data
- data exchange of seat selection and checkout
- business logic and database functions
- database populated through in-app processes
- Heroku build

Limitations:
- multer-gridfs not in MVC

Notes:
- date set static to May 8, 2020 for demo

---

## Local Set-Up

### Notes on local build
Due to async changes to functions for Heroku compatibility, some functions fail when run locally. We recommend using the app hosted on Heroku.

### Prerequisite: Node.js and npm installed

### Step 0: Enable environment variables
Uncomment line 2 of ./index.js
```
require('dotenv').config();
```

Create .env file
```
PORT=3000
MONGODB_URL="mongodb://OafallasKenneth:a1b2c3d4@ccapdev-mp-bigbrainmovi-shard-00-00.mubsx.gcp.mongodb.net:27017,ccapdev-mp-bigbrainmovi-shard-00-01.mubsx.gcp.mongodb.net:27017,ccapdev-mp-bigbrainmovi-shard-00-02.mubsx.gcp.mongodb.net:27017/BigBrainDB?ssl=true&replicaSet=CCAPDEV-MP-BIGBRAINMOVIES-shard-0&authSource=admin&retryWrites=true&w=majority"
SESSION_SECRET="thisisthesecretsessionkey"
```

### Step 1: Install dependencies
```
npm install
```
### Step 2: Compiles and starts local instance
```
npm start
```
### Step 3: Access local instance on localhost:3000

---

## Usage

### Step 4.a: Log in to customer services using
```
username: customer@test.com
password: p@ssword
```

For sample screening slot with a few unavailable seats, enter Screen 1 "The Room" Slot 1

For sample screening slot that is sold out, enter Screen 1 "The Room" Slot 2

### Step 4.b: Log in to employee services using
```
username: employee@test.com
password: p@ssword
```


