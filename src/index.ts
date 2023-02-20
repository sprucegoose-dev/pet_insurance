const express = require('express');
const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/pet');

app.patch('/pet/:id');

app.get('/pet/:id');

app.get('/pet/:id/claims');

app.get('/pets');

