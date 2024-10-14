import control from "@modules/access/login/controller/loginController";
import express from "express";

const route = express.Router();

route.put("/", control.getId);

export default route;
