# BACKEND
The backend uses nodejs and mongodb for the database.

## Getting started
### Installing dependencies
#### Installing Node and Nodejs
The backend depends on Node and Node Package Manager (NPM) you can download and install from this link [Node Download](https://nodejs.org/en/download/) **(Node includes NPM)**.

#### Installing project dependencies
This project utilizes NPM to manage third party libraries, npm relies in package.json to install dependencies. Before start the backend, install the dependencies, inside of the directory `./backend/` open your terminal and run.

```bash
npm install
```
### Required Tasks Before running the server
In this part will be the instructions before to start the backend.

#### Installing mongodb 
Before running the backend you need to have mongodb, in any of his editions.
- Community: To install the mongodb community go here. [Mongo community](https://docs.mongodb.com/manual/administration/install-community/)
- Atlas: Or you can use this hosting database service, it's also free. [Mongo Atlas](https://www.mongodb.com/cloud/atlas/register)

#### Setting up configuration

- Before run the server you have to setup your PORT configuration. You have to put your domain backend in the file `.env`.

- Update the database mongodb URL in the file `.env`.

#### Running your server
Once installed all third dependencies with `npm install` run your frontend server on a localhost port, inside of `./backend/` directory in your terminal run:

```bash
npm start
```

### Running Unit tests
Before running unit testing you have to check the file `./package.json` run script. 
- Check if the **--host** parameter coincides with your mongodb host.
- Check if the **--port** parameter coincides with your mongodb port.

```bash
npm run test
```

### Project Structure
If you want to do changes in the code this will be helpful.

```sh
├── README.md
├── .env *** Enviroment variables
├── src
│   ├── app.js *** The app server
│   ├── index.js *** Connect to the database and runs the server
│   ├── controllers *** The controllers used in routes
│   ├── models *** The models for ORM database
│   ├── routes *** The routes for the api
│   ├── utils *** Utilities, there are a backup.json for testing and the db to connect to mongodb.
│  