
# 🎓 Student Management REST API

A backend application for managing students and their course enrollments. Built with **Node.js**, **Express**, and **MongoDB**, this API supports full CRUD operations, authentication, validation, logging and rate limiting.

---

## 🚀 Features

- User Registration & JWT Authentication
- CRUD operations for Students & Courses
- Search Courses by title
- Pagination & filtering of Students
- Input Validation (express-validator)
- Rate Limiting for public APIs

---

## 🔧 Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JWT for Authentication
- express-validator (Validation)
- dotenv (Environment Variables)

---

## 📁 Project Structure

project/
│
├── controllers/
│   ├── authController.js
│   ├── studentController.js
│   └── courseController.js
│
├── models/
│   ├── User.js
│   ├── Student.js
│   └── Course.js
│
├── routes/
│   ├── authRoutes.js
│   ├── studentRoutes.js
│   └── courseRoutes.js
│
├── middlewares/
│   ├── auth.js
│   ├── validators.js
│   └── handleValidation.js
│
├── .env
├── .gitignore
├── server.js
├── package.json
└── README.md

---

## 📦 Setup & Run

### 1. Clone the repository


git clone https://github.com/YOUR_USERNAME/student-management-api.git
cd student-management-api


### 2. Install dependencies

npm install

### 3. Environment Variables

Create a \`.env\` file in the root folder and add:

PORT=5000
JWT_SECRET=your_jwt_secret_key
MONGO_URI=your_mongo_connection_string

### 4. Run the server

npm start


You should see:
\`\`\`
✅ MongoDB Atlas connected
🚀 Server running on port 5000
\`\`\`

---

## 🧪 API Endpoints

### 🔐 Auth

| Method | Endpoint            | Description         |
|--------|---------------------|---------------------|
| POST   | /api/auth/register  | Register a new user |
| POST   | /api/auth/login     | Login and get token |

---

### 👨‍🎓 Students

| Method | Endpoint               | Description                                |
|--------|------------------------|--------------------------------------------|
| GET    | /api/students          | Get all students (supports \`page\`, \`department\`) |
| GET    | /api/students/:id      | Get a student by ID                        |
| POST   | /api/students          | Create a new student                       |
| PUT    | /api/students/:id      | Update a student                           |
| DELETE | /api/students/:id      | Delete a student                           |

> Requires Bearer Token Auth in header: \`Authorization: Bearer <token>\`

---

### 📚 Courses

| Method | Endpoint       | Description                                     |
|--------|----------------|-------------------------------------------------|
| GET    | /api/courses   | List all or search by title using \`?title=abc\` |
| POST   | /api/courses   | Create a new course                             |

---

## 📤 Uploads


\`\`\`json
{
  "name": "Riya Sharma",
  "email": "riya@example.com",
  "department": "CS",
}

---

## 🧰 Utilities

- **Logging**: Morgan logs HTTP requests.
- **Rate Limiting**: Public APIs are protected with throttling.
- **Validation**: All input fields are validated before insertion.

---

## 🤝 Contributions

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

---


EOF
