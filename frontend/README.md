# FRONTEND
The frontend uses react library and was created with `npx create-react-app`

## Getting started
### Installing dependencies
#### Installing Node and Nodejs
The front end depends on Node and Node Package Manager (NPM) you can download and install from this link [Node Download](https://nodejs.org/en/download/) **(Node includes NPM)**.

#### Installing project dependencies
This project utilizes NPM to manage third party libraries, npm relies in package.json to install dependencies. Before start the frontend, install the dependencies, inside of the directory `./frontend/` open your terminal and run.

```bash
npm install
```
### Required Tasks Before running the server
In this part there are the instructions before to start the frontend.

#### Setting up configuration

Before run the server you have to setup your auth configuration. You have to put your domain backend in the file `./src/.env`

#### Running your server
Once installed all third dependencies with `npm install` run your frontend server on a localhost port, inside of `./frontend/` directory in your terminal run:

```bash
npm start
```

### Project Structure
```sh
├── README.md
├── src
│   ├── index.js
│   ├── App.js *** The principal component which holds FormEmail and FormPayment componets
│   ├── .env *** The The domain of the backend
│   ├── auth_config.json *** The json with the information of auth0, update with your credentials.
│   ├── lib *** Libraries utilized in the project.
│   ├── hooks *** Hooks used to refactor code.
│   ├── components
│       ├──Forms *** All components related to Forms.
│       ├──UI *** Al user interfaces to be reutilized.
```