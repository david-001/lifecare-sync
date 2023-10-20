# Lifecare Sync App

## Requirements

1. This app requires the security services from Pangea. Create an account at [Pangea](https://login.aws.us.pangea.cloud/authorize?redirect_uri=https%3A%2F%2Fconsole.pangea.cloud&state=6xpa7trXAvBQa5vxirTooogabcf2sk5x)

2. This app requires MongoDB. Create an account at [MongoDB](https://www.mongodb.com/)

## Running this app locally

1. Navigate to the frontend directory and install the dependencies.
   `npm install`

2. Create a file called .env in this directory. Put the following code in this directory.
   `REACT_APP_SERVER_URL=http://localhost:8000/`

3. Build the app.
   `npm run build`

4. Copy the contents of the build folder in the frontend directory.

5. Navigate to the backend directory and paste the contents in the public folder.

6. Install the dependencies.
   `npm install`

7. Create a file called .env in this directory. Put the following code in this directory.

```
PANGEA_TOKEN= {YOUR TOKEN}
PANGEA_DOMAIN= {YOUR DOMAIN}
MONGODB_USER= {YOUR MONGODB USER}
MONGODB_PWD= {YOU MONGODB PASSWORD}
```
