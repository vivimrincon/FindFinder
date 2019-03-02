const express = require('express'); //Node.js Web Framework

// Sets up the Express app to handle data parsing
let app = express();
let PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static(__dirname + "/"));

//Routes
let htmlRouter = require('./app/routes/html-routes.js');
app.use('/', htmlRouter);
// let apiRoutes = require('./app/routes/api-routes.js');
// app.use("/", apiRoutes);

//Starts the server
app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`)); 