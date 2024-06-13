// userController.js
import * as airlineService from '../services/airlineService.js';

// Obtener todo
const getAll = async (req, res) => {
  try {
    const data = await airlineService.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener  por ID
const getById = async (req, res) => {
  try {
    const data = await airlineService.getById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Crear un nuevo registro
const create = async (req, res) => {
  console.log(req.body)
  try {
    const data = await airlineService.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar por ID
const updateById = async (req, res) => {
  try {
    const data = await airlineService.updateById(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Eliminar por ID
const deleteById = async (req, res) => {
  try {
    await airlineService.deleteById(req.params.id);
    res.status(200).json({ message: 'Dato eliminado exitosamente' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};
