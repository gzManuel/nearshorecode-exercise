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

Before run the server you have to setup your auth configuration. You have to fill it the information in 'auth_config.json', you can also follow this guide if you don't know how to use auth0. [Auth0 Quickstart](https://auth0.com/docs/libraries/auth0-react)

#### Running your server
Once installed all third dependencies with `npm install` run your frontend server on a localhost port, inside of `./frontend/` directory in your terminal run:

```bash
npm start
```

### Project Structure
If you want to do changes in the code this will be helpful.

```sh
├── README.md
├── src
│   ├── index.js
│   ├── App.js *** The principal component which holds the layout and route components.
│   ├── config.js *** The formatted config object using with auth_config.json
│   ├── auth_config.json *** The json with the information of auth0, update with your credentials.
│   ├── pages *** The routing components.
│   ├── lib *** Libraries utilized in the project.
│   ├── icons
│   ├── hooks *** Hooks utilized to refactor code.
│   ├── components
│       ├──Actors *** All components related to Actors.
│       ├──Layout *** All components related to the main Layout.
│       ├──Movies *** All components related to Movies.
│       ├──UI *** All  user interface components.
```