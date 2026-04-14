# 🔐 JWT Authentication using Node.js & Express

## 📌 Project Overview

This project demonstrates **JWT (JSON Web Token) based authentication** using a backend built with Node.js and Express.

It includes:

* User login authentication
* JWT token generation
* Protected routes using middleware
* API testing using Postman

---
## submission details 

* Student - Ankit
* UID - 23BAI70287
* section - 23AML7-A
* Experiment - 6

some delay might have occured due to placement clashes 

--- 
## 🎯 Objective

* Implement JWT Authentication in backend
* Manage user sessions using JWT
* Secure routes using token verification
* Test APIs using Postman

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* JWT (jsonwebtoken)
* dotenv
* Postman (for API testing)

---

## 📁 Project Structure

```
jwt-auth/
├── controllers/
│   └── authController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── userModel.js
├── routes/
│   └── authRoutes.js
├── server.js
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone <your-repo-link>
cd jwt-auth
```

### 2. Install dependencies

```
npm install
```

### 3. Create `.env` file

```
JWT_SECRET=mysecretkey123
PORT=5000
```

### 4. Run the server

```
npx nodemon server.js
```

Server will run on:

```
http://localhost:5000
```

---

## 🔐 API Endpoints

### ✅ 1. Login API

* **Method:** POST
* **URL:** `/api/login`

#### Request Body:

```
{
  "username": "admin",
  "password": "1234"
}
```

#### Response:

```
{
  "token": "your_jwt_token"
}
```

---

### 🔒 2. Protected Route

* **Method:** GET
* **URL:** `/api/protected`

#### Headers:

```
Authorization: Bearer <your_jwt_token>
```

#### Response:

```
{
  "message": "Access granted to protected route"
}
```

---

## 🧪 Testing using Postman

### Step 1: Login

* Send POST request with credentials
* Receive JWT token

### Step 2: Copy Token

* Copy token from response

### Step 3: Access Protected Route

* Add token in Authorization header
* Access secured endpoint

---

## 🔍 How JWT Works

1. User sends login credentials
2. Server verifies credentials
3. JWT token is generated
4. Client stores token
5. Token is sent in headers for protected routes
6. Server validates token before granting access

---

## 📸 Screenshots

* Login request with token generation
* JWT token received
* Accessing protected route using token

---

## ⚠️ Notes

* This project uses a **hardcoded user model** (no database)
* JWT is stateless (no session stored on server)
* Token expires after a specific time

---


## ✅ Conclusion

Successfully implemented JWT authentication with login functionality and protected routes using middleware. Verified API functionality using Postman.
