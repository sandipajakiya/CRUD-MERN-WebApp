# CRUD-MERN-WebApp

This is a **MERN (MongoDB, Express.js, React.js, Node.js) CRUD Web Application** that allows users to perform **Create, Read, Update, and Delete (CRUD)** operations. The project follows a structured **MVC (Model-View-Controller)** architecture and uses **RESTful API** for backend communication.

## Features  
✅ Create new records  
✅ Read and display existing records  
✅ Update existing records  
✅ Delete records  
✅ Responsive and user-friendly UI  

## Tech Stack  
- **Frontend**: React.js, Axios, Bootstrap/Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB with Mongoose  
- **State Management**: React Hooks or Redux (if applicable)  

## Installation  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/mern-crud-app.git
cd mern-crud-app
```

### 2️⃣ Install Dependencies  

#### Backend  
```bash
cd backend
npm install
```

#### Frontend  
```bash
cd frontend
npm install
```

### 3️⃣ Setup Environment Variables  
Create a `.env` file in the **backend** directory and add:  
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4️⃣ Start the Application  

#### Run Backend  
```bash
cd backend
npm start
```
The server will run on **http://localhost:5000**.

#### Run Frontend  
```bash
cd frontend
npm start
```
The React app will run on **http://localhost:3000**.

## API Endpoints  
| Method | Endpoint       | Description          |
|--------|--------------|----------------------|
| GET    | `/api/items` | Get all items       |
| GET    | `/api/items/:id` | Get item by ID    |
| POST   | `/api/items` | Create new item     |
| PUT    | `/api/items/:id` | Update item       |
| DELETE | `/api/items/:id` | Delete item       |

## Folder Structure  
```
mern-crud-app/
│── backend/
│   ├── models/       # Database Models
│   ├── routes/       # API Routes
│   ├── controllers/  # Business Logic
│   ├── config/       # Database Config
│   ├── server.js     # Main Server File
│── frontend/
│   ├── src/
│   │   ├── components/  # UI Components
│   │   ├── pages/       # React Pages
│   │   ├── App.js       # Main App File
│   │   ├── index.js     # React Entry Point
│── .gitignore
│── README.md
```

## Contributing  
1. Fork the repo  
2. Create a new branch (`git checkout -b feature-name`)  
3. Commit your changes (`git commit -m "Added feature"`)  
4. Push to the branch (`git push origin feature-name`)  
5. Open a Pull Request 
