# crudtemplate

A simple reusable Express + MongoDB CRUD template.

## What it contains

- Express server
- MongoDB / Mongoose
- User login
- JWT authentication
- Password hashing with bcrypt
- Generic CRUD document model
- Simple CRUD frontend
- Vercel deployment

## Project structure

backend/
  middleware/
  models/

public/
  css/
  js/
  index.html

server.js

## Local setup

1. Clone the repository
2. npm install
3. Create .env
4. Add MONGODB_URI
5. Add JWT_SECRET
6. npm start
7. Open localhost:3000

## Environment variables

MONGODB_URI=...
JWT_SECRET=...

## CRUD API

GET    /api/documents
POST   /api/documents
GET    /api/documents/:id
PUT    /api/documents/:id
DELETE /api/documents/:id

## Using this as a template

Clone the repository and replace CrudDocument with the project's own document model when appropriate.