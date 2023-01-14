'use strict';
//import express from 'express';
const express = require('express');
const personalData = require('./personal-web.controller').default;
const app = express();
const port = 3000;

app.get('/', personalData.list);
app.get('/:id', personalData.get);
app.post('/', personalData.create);
app.put('/:id', personalData.update);
app.delete('/:id', personalData.destroy);

app.get('*', (req, res) => {
    res.status(404).status('Endpoint not found.');
});

app.listen(port, () => {
    console.log('Starting app...');
});