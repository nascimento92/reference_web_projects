import loginRoute from "@modules/access/login/routes/loginRoute";
import validateTypeAccess from "@modules/typeuser/routes/validateTypeAccessRoute";

import { mongoMiddleware } from "@shared/middleware/mongoMiddleware";
import express from "express";

const router = express.Router();
router.use(mongoMiddleware);

router.use("/api/login", loginRoute);
router.use("/api/validatetypeaccess", validateTypeAccess);

export default router;
