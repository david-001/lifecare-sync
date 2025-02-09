# Lifecare Sync App

## Requirements

1. This app requires MongoDB. Create an account at [MongoDB](https://www.mongodb.com/)

## Running this app locally

1. Navigate to the frontend folder and install the dependencies.
   `npm install`

2. Create a file called .env in this directory (frontend folder). Enter the following code in this file.
   `REACT_APP_SERVER_URL=http://localhost:8000/`

3. Build the app.
   `npm run build`

4. Copy the contents of the build folder in the frontend directory.

5. Navigate to the backend folder and paste the contents in the public folder.

6. Install the dependencies.
   `npm install`

7. Create a file called .env in this directory (backend folder). Enter the following code in this file.

```
MONGODB_USER= {YOUR MONGODB USER}
MONGODB_PWD= {YOU MONGODB PASSWORD}
```

8. In the backend directory, run the command.
   `node server.js`
