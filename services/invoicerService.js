// userService.js
import Invoicer from '../models/invoicerModel.js';

// Obtener todo
const getAll = async () => {
  try {
    return await Invoicer.find();
  } catch (error) {
    throw new Error(`Error al obtener los datos del schema: ${error.message}`);
  }
};

// Obtener por ID
const getById = async (id) => {
  try {
    const data = await Invoicer.findById(id);
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
    const data = new Invoicer(newData);
    await data.save();
    return data;
  } catch (error) {
    throw new Error(`Error al crear el nuevo registro: ${error.message}`);
  }
};

// Actualizar por ID
const updateById = async (id, updateData) => {
  try {
    const data = await Invoicer.findByIdAndUpdate(id, updateData, { new: true });
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
    const data = await Invoicer.findByIdAndDelete(id);
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
