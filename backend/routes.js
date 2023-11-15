const { Router } = require("express");
const routes = Router();
const { signup, login } = require("./controllers/userControllers")


routes.post("/signup", signup);

routes.post("/login", login);

module.exports = routes;
