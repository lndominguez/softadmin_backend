// userController.js
import User from "../models/userModel.js";
import * as userService from "../services/userService.js";
import bcryptjs from "bcryptjs";

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAA");
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
  console.log(req.params.id);
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const newData = req.body;
    console.log(newData);
    const hashedPassword = await bcryptjs.hash(newData?.password, 10);
    newData.password = hashedPassword;
    const data = await userService.createUser(newData);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un usuario por ID
const updateUserById = async (req, res) => {
  try {
    const newData = req.body;
    const userFound = await User.findOne({ _id: req.params.id });
    if (userFound) {
      if (
        !newData?.password == undefined &&
        newData?.password !== userFound?.password
      ) {
        const hashedPassword = await bcryptjs.hash(newData?.password, 10);
        newData.password = hashedPassword;
      }
      const user = await userService.updateUserById(req.params.id, newData);
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Eliminar un usuario por ID
const deleteUserById = async (req, res) => {
  try {
    if (!req.params.id == null && req.body === null) {
      await userService.deleteUserById(req.params.id);
      res.status(200).json({ message: "Usuario eliminado exitosamente" });
    } else {
      await userService.deleteUsers(req.body);
      res.status(200).json({ message: "Usuarios eliminados exitosamente" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export { getAllUsers, getUserById, createUser, updateUserById, deleteUserById };
