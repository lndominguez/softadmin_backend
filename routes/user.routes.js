// userRoutes.js
import express from "express";
import bodyParser from "body-parser";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/userController.js";

const router = express.Router();
router.use(bodyParser.json());

// Rutas para CRUD de usuarios
router.post("/user/new", createUser);
router.get("/user/list", getAllUsers);
router.get("/user/details/:id", getUserById);
router.patch("/user/update/:id", updateUserById);
router.delete("/user/delete/:id", deleteUserById);

export default router;
