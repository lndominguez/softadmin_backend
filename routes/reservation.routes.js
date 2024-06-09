// userRoutes.js
import express from 'express';
import {
  create,
  getAll,
  getById,
  updateById,
  deleteById
} from '../controllers/reservationController.js';

const router = express.Router();

// Rutas para CRUD de usuarios
router.post('/reservation/new', create);
router.get('/reservation/list', getAll);
router.get('/reservation/:id', getById);
router.put('/reservation/:id', updateById);
router.delete('/reservation/:id', deleteById);

export default router;
