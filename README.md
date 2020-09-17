# Pico y Placa (@gangrelg)

El objetivo de este proyecto es dar a conocer si un vehiculo puede circular o no en base a parametros como: placa, fecha y tiempo.

## Getting Started

El proyecto esta basado en NodeJS, ExpressJS y ReactJS como stack por lo cual sirvase ver la seccion de "Prerequisites".

* [Demo](https://picoyplaca-sb.herokuapp.com/)

### Prerequisites

```
NodeJS (npm)
```

### Installing
Es necesario contar ya con un ambiente Node para configurar el proyecto.

```
-git clone de proyecto
-dentro del proyecto raiz, correr "npm install"
-dentro de carpeta "client", correr "yarn"
-ejecutar "npm run start" en carpeta raiz para levantar el servidor
-ejecutar "yarn start" en carpeta "client" para levantar servidor dev de cliente
```
![alt text](https://i.imgur.com/otUiXKQ.png)

## Running the tests

Los tests se pueden ejecutar con
```
npm test
```

## Deployment

El proyecto se ha configurado para utilizar "CircleCI" respecto a integracion continua y puede ser configurado como tal dentro del proyecto en:
```
.circleci/config.yml
```
![alt text](https://i.imgur.com/jSL87oV.png)

## Built With

* [NodeJS](https://nodejs.org/es/) - JS Runtime Environment
* [Express](https://expressjs.com/es/) - Web Framework (Backend)
* [React](https://es.reactjs.org/) - Web Library for UI (Frontend)
* [Jest](https://jestjs.io/) - Unit Testing
* [Supertest](https://www.npmjs.com/package/supertest) - HTTP Testing
* [CircleCI](https://circleci.com/) - Continuous Integration and Delivery
* [Heroku](https://www.heroku.com/) - Cloud Deployment

## Authors

* **Galo Mosquera** - *Full Project* - [gangrelg](https://github.com/gangrelg)
