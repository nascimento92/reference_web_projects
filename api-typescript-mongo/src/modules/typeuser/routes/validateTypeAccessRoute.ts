import express from "express";
import control from "@modules/typeuser/controller/validateTypeAccessController";

const route = express.Router();

route.get("/", control.getAccess);

export default route;
