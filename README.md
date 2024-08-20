# Help Center API Assignment

# MERN Vite App

This is a MERN stack application using Vite for the frontend build tool. The stack includes MongoDB, Express.js, React, and Node.js.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use a MongoDB cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- [Git](https://git-scm.com/)

## Getting Started

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Suryanarayana-gaddam/FutureSkillsTask.git
cd FutureSkillsTask
```

### Install Dependencies

#### Backend (Node.js + Express)

Navigate to the backend directory and install the required dependencies:

```bash
cd backend
npm install
```

#### Frontend (React + Vite)

Navigate to the frontend directory and install the required dependencies:

```bash
cd frontend
npm install
```

### Configure Environment Variables

You need to configure environment variables for both the backend and frontend. 

#### Backend

Create a `.env` file in the `backend` directory and add the following environment variables:

```env
MONGO_URI=mongodb://localhost:27017/yourdbname
PORT=5100
```

Replace `mongodb://localhost:27017/yourdbname` with your MongoDB connection string


### Running the Application

#### Start the Backend Server

In the `backend` directory, run the following command to start the backend server:

```bash
npm start
```

The server will start on `http://localhost:5100` (or the port specified in your `.env` file).

#### Start the Frontend Development Server

In the `frontend` directory, run the following command to start the Vite development server:

```bash
npm run dev
```

The frontend application will start on `http://localhost:5173` by default.

### Testing the Application

Ensure both the backend and frontend servers are running. Open your browser and navigate to `http://localhost:5173` to see the application in action.


### Troubleshooting

- Ensure MongoDB is running and accessible.
- Check that all environment variables are correctly set.
- Verify that ports are not being used by other applications.
- Consult the console for error messages and check the logs for more details.

