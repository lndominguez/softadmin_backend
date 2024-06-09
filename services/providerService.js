// userService.js
import Provider from '../models/providerModel.js';

// Obtener todo
const getAll = async () => {
  try {
    return await Provider.find();
  } catch (error) {
    throw new Error(`Error al obtener los datos del schema: ${error.message}`);
  }
};

// Obtener por ID
const getById = async (id) => {
  try {
    const data = await Provider.findById(id);
    if (!data) {
      throw new Error('Datos no encontrado');
    }
    return data;
  } catch (error) {
    throw new Error(`Error al obtener datos por ID: ${error.message}`);
  }
};

// Crear un nuevo registro
const create = async (newData) => {
  try {
    const data = new Provider(newData);
    await data.save();
    return data;
  } catch (error) {
    throw new Error(`Error al crear el nuevo registro: ${error.message}`);
  }
};

// Actualizar por ID
const updateById = async (id, updateData) => {
  try {
    const data = await Provider.findByIdAndUpdate(id, updateData, { new: true });
    if (!data) {
      throw new Error('Datos no encontrado para actualizar');
    }
    return data;
  } catch (error) {
    throw new Error(`Error al actualizar datos por ID: ${error.message}`);
  }
};

// Eliminar por ID
const deleteById = async (id) => {
  try {
    const data = await Provider.findByIdAndDelete(id);
    if (!data) {
      throw new Error('Datos no encontrado para eliminar');
    }
    return { message: 'Datos eliminado exitosamente' };
  } catch (error) {
    throw new Error(`Error al eliminar por ID: ${error.message}`);
  }
};

export {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};
