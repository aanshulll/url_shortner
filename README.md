# 🔗 URL Shortener

This is a simple URL shortener app I built using **Node.js, Express, MongoDB, and EJS**.  
The idea is straightforward – paste a long link, and you’ll get a short, shareable one back.  
It also tracks visits so you can see when your links are being used.

---

## ✨ What it can do
- Turn long, messy URLs into short ones
- Redirect short URLs to the original site
- Keep track of visits with timestamps
- Clean and minimal UI (EJS templates)
- Stores everything in MongoDB

---

## 🛠 Tech Used
- Backend: **Node.js + Express**
- Frontend: **EJS, HTML, CSS**
- Database: **MongoDB (Mongoose)**
- Config: **dotenv**

---

url-shortener/
├── models/ # URL schema with Mongoose
├── routes/ # App routes
├── middleware/ # Authentication middleware
├── utils/ # JWT functions
├── views/ # EJS templates (frontend)
├── public/ # Static files (CSS, JS)
├── connection.js # DB configuration
├── server.js # Entry point
└── .env # Environment variables
