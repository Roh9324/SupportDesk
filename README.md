# 🎫 SupportDesk - Ticket Management System

SupportDesk is a full-stack Ticket Management System that allows users to create, view, search, filter, and update support tickets. The application is built using React.js, Spring Boot, and PostgreSQL (Supabase) following a clean layered architecture.

---

## 🚀 Live Demo

**Live Application:**  
https://YOUR-VERCEL-LINK.vercel.app

**Backend API:**  
https://supportdesk-rd51.onrender.com

---

## 📂 GitHub Repository

https://github.com/Roh9324/SupportDesk

---

## 🎥 Demo Video

https://YOUR-YOUTUBE-LINK

---

# 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router
- Axios
- CSS

### Backend
- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- Maven

### Database
- PostgreSQL
- Supabase

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: Supabase

---

# ✨ Features

- Create support tickets
- View all tickets
- View ticket details
- Search tickets
- Filter tickets by status
- Update ticket status
- REST API integration
- PostgreSQL database integration
- Responsive and clean UI

---

# 🏗️ Project Architecture

```
React Frontend
       │
       ▼
REST API (Axios)
       │
       ▼
Spring Boot Backend
       │
       ▼
Spring Data JPA
       │
       ▼
PostgreSQL (Supabase)
```

---

# 📁 Project Structure

```
SupportDesk
│
├── Backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   ├── dto
│   └── resources
│
└── Frontend
    ├── components
    ├── Pages
    ├── services
    ├── Styles
    └── assets
```

---

# 📷 Application Screens

- Dashboard
- Create Ticket
- Ticket Details
- Search & Filter
- Update Ticket Status

---

# ⚙️ Running the Project Locally

## Clone the repository

```bash
git clone https://github.com/Roh9324/SupportDesk.git
```

---

## Backend Setup

Navigate to the backend folder.

```bash
cd Backend
```

Configure the following environment variables:

```text
DB_URL=your_database_url
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
```

Run the application:

```bash
mvn spring-boot:run
```

The backend runs on:

```
http://localhost:8081
```

---

## Frontend Setup

Navigate to the frontend folder.

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on:

```
http://localhost:5173
```

---

# 📌 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/tickets | Get all tickets |
| GET | /api/tickets/{id} | Get ticket by ID |
| POST | /api/tickets | Create ticket |
| PUT | /api/tickets/{id} | Update ticket |
| GET | /api/tickets/search?keyword= | Search tickets |
| GET | /api/tickets/status/{status} | Filter by status |

---

# 🚧 Challenges Faced

- Integrating React with Spring Boot
- Configuring CORS
- Migrating from local PostgreSQL to Supabase
- Deploying backend on Render
- Managing environment variables securely
- Resolving Git merge conflicts

---

# 🔮 Future Enhancements

- User Authentication (JWT)
- Role-Based Access Control
- Email Notifications
- Dashboard Analytics
- Pagination
- Unit & Integration Testing
- Docker Support
- CI/CD Pipeline

---

# 👨‍💻 Author

**Yash Mishra**

GitHub: https://github.com/Roh9324

---

Thank you for reviewing this project!
