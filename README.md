# NASA Project

## Dependencies

- Node.js
- Express.js
- React
- MongoDB
- Mongoose

## Description

This is a small project aimed at getting familiar with Node.js and MongoDB. You can use it to create schedules and delete missions.

## Getting Started

Follow these steps to get started with the project:

1. Clone the project.
2. Install the required dependencies by running `npm install` (for both server and the client at the same time).
3. To set up the database, create an `.env` file in the root project directory and add the following:

   ```env
   PORT=8000
   MONGO_URI=<your_MongoDB_URI_here>
   ```

   For mongo_URI: https://www.mongodb.com/docs/guides/atlas/cluster/

4. Run the project `npm run watch`, to run both the server and the client, you can also run them separately by using `npm run client` or `npm run server`
