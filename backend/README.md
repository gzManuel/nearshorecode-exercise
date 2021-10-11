# BACKEND

# FRONTEND
The frontend uses react library and was created with `npx create-react-app`

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
In this part will be the instructions before to start the backend

#### Setting up configuration

- Before run the server you have to setup your PORT configuration. You have to put your domain backend in the file `.env`

- Update the database mongodb URL in `./src/app.js` file

#### Installing mongodb 


#### Running your server
Once installed all third dependencies with `npm install` run your frontend server on a localhost port, inside of `./backend/` directory in your terminal run:

```bash
npm start
```
### Project Structure
If you want to do changes in the code this will be helpful.

```sh
├── README.md
├── .env *** Enviroment variables
├── src
│   ├── app.js *** Execute the app
│   ├── controllers *** The controllers used in routes
│   ├── models *** The models for ORM database
│   ├── routes *** The routes for the api
│  