/*
  Simple Static Server for Vue content and API
  by: Ari Stehney
*/
const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');

const discord = require('discord.js');
const { MongoClient } = require("mongodb");

/* api settings */
const mongouri = "";

/* start server */
app = express();
const port = process.env.PORT || 8000;
app.use(serveStatic(path.join(__dirname, 'dist')));
app.listen(port);