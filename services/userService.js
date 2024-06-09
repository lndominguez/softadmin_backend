// userService.js
import User from "../models/userModel.js";

// Obtener todos los usuarios
const getAllUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    throw new Error(`Error al obtener usuarios: ${error.message}`);
  }
};

// Obtener un usuario por ID
const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    return user;
  } catch (error) {
    throw new Error(`Error al obtener usuario por ID: ${error.message}`);
  }
};

// Crear un nuevo usuario
const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw new Error(`Error al crear usuario: ${error.message}`);
  }
};

// Actualizar un usuario por ID
const updateUserById = async (userId, userData) => {
  try {
    const user = await User.findByIdAndUpdate(userId, userData, { new: true });
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    return user;
  } catch (error) {
    throw new Error(`Error al actualizar usuario por ID: ${error.message}`);
  }
};

// Eliminar un usuario por ID
const deleteUserById = async (userId) => {
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    return { message: "Usuario eliminado exitosamente" };
  } catch (error) {
    throw new Error(`Error al eliminar usuario por ID: ${error.message}`);
  }
};
const deleteUsers = async (listId) => {
  try {
    listId.map(async (id) => {
      await User.findByIdAndDelete(id);
    });

    return { message: "Usuario eliminado exitosamente" };
  } catch (error) {
    throw new Error(`Error al eliminar usuario por ID: ${error.message}`);
  }
};

export {
  getAllUsers,
  getUserById,
  createUser,
  deleteUsers,
  updateUserById,
  deleteUserById,
};
