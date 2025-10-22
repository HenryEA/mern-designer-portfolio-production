# Graphic Designer Portfolio Website

This project is a complete full-stack solution built using the MERN stack (MongoDB, Express.js, React, Node.js) and TailwindCSS. It was developed to help a graphic designer showcase their work to potential clients and manage client communications. Below is an overview of what the application does and the key features it offers.

## Project Overview

The core objective was to build a platform where the designer’s portfolio, social-media links, and contact details can be displayed attractively, while also enabling clients to send messages and inquiries directly.
On the frontend, a clean, responsive UI was developed to ensure the site looks great on all screen sizes.
On the backend, the application supports user authentication and authorization, secure password handling, and message storage, enabling real-life functionality for client-designer communication.

## Key Features

User Authentication & Authorization – Users can register and log in; certain routes are protected, ensuring only authorized users can access specific functionality.
JWT Password Security – Authentication tokens are handled using JSON Web Tokens (JWTs), ensuring secure session handling.
Application Security – Middleware such as Helmet and XSS-Clean are used to protect against common web vulnerabilities.
Portfolio Display – Projects, design work, social-media links, and contact information are rendered dynamically on the frontend, showcasing the designer’s brand.
Client Messages Database – Visitors can send messages which are stored in the MongoDB database, enabling the designer to manage inquiries.
Responsive Design – Built using TailwindCSS and React, the UI adapts to different device sizes and provides smooth navigation and a modern look.
Full Stack Architecture – The frontend is connected to a Node.js/Express backend, which interacts with MongoDB for data storage and retrieval.
Testing & Deployment – Unit tests using Jest were written to validate critical backend routes (e.g., register and login) as well as key frontend components.

## Technology Stack
### Frontend:
React.js
JavaScript
TailwindCSS

### Backend:
Node.js
Express.js
MongoDB with Mongoose
Authentication with JWTs
Security middleware:Helmet, XSS-Clean

#### Why I Chose These Technologies
Building a full-stack application required tools that are both efficient and scalable, which led me to the MERN stack (MongoDB, Express.js, React, Node.js).
The reason why I choose teh technologies above are:
React.js – I chose React for the frontend because it enables building fast, dynamic, and component-based UIs. Its virtual DOM makes rendering efficient, while reusable components help maintain clean and scalable code.
Node.js & Express.js – For the backend, I used Node.js and Express because they provide a lightweight, non-blocking I/O model that’s ideal for building fast and scalable APIs. Express simplifies routing, middleware management, and server logic, making it perfect for RESTful backend services.
MongoDB – I chose MongoDB as the database because of its flexible schema and seamless integration with JavaScript. It allows easy storage of structured and unstructured data, such as client messages and portfolio items.
TailwindCSS – For styling, I used TailwindCSS because of its utility-first approach and ease of building responsive layouts quickly without writing repetitive CSS.

## Getting Started
- Clone the repository:
  git clone https://github.com/HenryEA/mern-designer-portfolio-production.git  
- Install dependencies for both frontend and backend.
- Set up environment variables (e.g., MongoDB URI, JWT secret, client URL).
- Run the development servers and visit the application to view the portfolio and test functionality.
