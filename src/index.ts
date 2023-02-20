import PetsController from './controllers/PetsController';
import UsersController from './controllers/UsersController';

const express = require('express');
const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/pet', PetsController.create);
app.get('/pet/:petId', PetsController.getOne);
app.get('/pet/:petId/claims');
app.patch('/pet/:petId', PetsController.update);
app.delete('/pet/:petId', PetsController.delete)

app.post('/user', UsersController.create);
app.get('/user', UsersController.getAll);
app.get('/user/:userId', UsersController.getOne);
app.get('/user/:userId/pets', UsersController.getPets);
app.patch('/user/:userId', UsersController.update);
app.delete('/user/:userId', UsersController.delete)

http.listen(3000, () => {
    console.log('listening on *:3000');
});
