# 📝 Notekeeper API - Express + MongoDB

A simple and powerful Notes REST API built using **Express.js**, **Node.js**, and **MongoDB Atlas**.  
`notekeeper-api` lets you **create**, **read**, **update**, and **delete** notes through RESTful endpoints.  
Perfect for beginners practicing CRUD operations and learning backend development with MongoDB and Mongoose.

---

## 🚀 Features

- ✅ Create new notes
- 📥 Fetch all saved notes
- 🛠️ Update note title
- ❌ Delete a note
- 🔗 MongoDB Atlas integration
- 📫 Tested with Postman

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **Postman** (for testing)

---

## 📁 Project Structure











---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/ritvijverma/notekeeper-api.git
cd notekeeper-api
```

### 2. Install dependencies
```bash
npm install

```

### 3. Configure MongoDB
MongoDB connection is handled in /src/db/db.js:

````js
mongoose.connect("mongodb+srv://<your-db-url>");
````
If you want to use your own MongoDB Atlas URL, replace it there.

### 4. Start the server
````bash
node server.js
`````

### 📬 API Endpoints (Test in Postman)

### ➕ Create a Note
POST /notes

Body (JSON):
````json
{
  "title": "test_title_01",
  "content": "test_content_01"
}
````
### 📄 Get All Notes
GET /notes
Returns all saved notes.

### 📝 Update a Note Title
PATCH /notes/:id

Example: /notes/688c5c1099f436665924ed9e

Body:

````json
{
  "title": "Updated Title"
}
````

### ❌ Delete a Note
DELETE /notes/:id

Example: /notes/6884b32babb1f413c55f0928

### 💡 Fun Fact
🚀 "nodemon is my therapist. It listens and restarts every time I break."

### 👨‍💻 Developed by Ritvij Verma

> GitHub: @ritvijverma

> LinkedIn: linkedin.com/in/ritvij-verma

> Instagram: @ritvij.verma

---

### 🙌 Final Words

Thank you for checking out this project!  
This is just a small step in my journey of mastering backend development.  
If you're a beginner like me, feel free to fork this repo, try the API yourself, and build something awesome!

> ⭐ Star the repo if you found it helpful  
> 🛠️ Suggest improvements or open a PR  
> 📬 Let's connect and grow together 💻

Happy Coding! 💙  
— Ritvij





