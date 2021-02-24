### CCAPDEV-Phase-2
# s15-mp1

# Big Brain Movies Movie Reservation System

## Team Members:

* OAFALLAS, Kenneth Neil B.
* JOYA, Patrick Jaspher B.
* CHUA CHIACO, Ronn Christian C.

---

## Features
Phase 2 implements the following features:
- all views
- all routes and navigation between views
- retrieval of all dynamic data from online MongoDB database
- basic user authentication, access control and session data
- data exchange of seat selection and checkout via db for display purposes
- login/signup verification through database

Limitations:
- database was populated manually and artificially (except for user accounts, and between seat selection and checkout for display purposes)
- database not checked for logic (apart from user accounts)
- business logic not fully implemented i.e. checkout and add screening do not update database yet
- local build only
- MVC not fully implemented
- Application date set to May 8, 2020 for consistency with artificial data
- limited UI responsiveness

---

## Set-Up
### Prerequisite: Node.js and npm installed
### Step 1: Install dependencies
```
npm install
```
### Step 2: Compiles and starts local instance
```
npm start
```
### Step 3: Access local instance on localhost:3000
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



