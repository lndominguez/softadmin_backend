// userRoutes.js
import express from 'express';
import {
  create,
  getAll,
  getById,
  updateById,
  deleteById
} from '../controllers/airlineController.js';

const router = express.Router();

// Rutas para CRUD de usuarios
router.post('/airline/new', create);
router.get('/airline/list', getAll);
router.get('/airline/:id', getById);
router.put('/airline/:id', updateById);
router.delete('/airline/:id', deleteById);

export default router;
