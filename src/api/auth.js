import express from "express";

import { loginUser, singUp, changePassword } from "./routes/login";

const authRoutes = express.Router();

authRoutes.post("/", loginUser());
authRoutes.post("/sing-up", singUp());
authRoutes.put("/change-password", changePassword());

export default authRoutes;
