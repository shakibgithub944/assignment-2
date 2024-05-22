# Get Start

## Project Setup Instructions

This project uses Node.js, Express, and Mongoose to create a server application. Below are the steps to run the project locally.

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 18 or later)
- [MongoDB](https://www.mongodb.com/) (either locally installed or using a MongoDB Atlas cluster)

### Clone the Repository

Clone the project repository to your local machine using the following command:

```sh
git clone https://github.com/shakibgithub944/assignment-2.git
cd yourrepository
```

### Install Dependencies

Install the project dependencies using npm:

npm install

Environment Variables Example:
Create a .env file in the root of the project and add the following content:

PORT=5000

# For MongoDB Atlas cluster

DATABASE_URL=MONGODB_URL

Running the Project
To start the server in development mode, use the following command:

npm run start:dev
This will start the server with nodemon and ts-node-dev for automatic restarts and TypeScript compilation.

Building the Project
To compile the TypeScript code to JavaScript, use:

npm run build

Linting and Formatting
To check for linting errors using ESLint, run:
npm run lint

To automatically fix linting errors, run:

npm run lint:fix

To format the code using Prettier, run:
npm run prettier

To automatically fix formatting issues, run:
npm run prettier:fix
