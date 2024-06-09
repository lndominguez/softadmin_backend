// userRoutes.js
import express from 'express';
import {
  create,
  getAll,
  getById,
  updateById,
  deleteById
} from '../controllers/paymentTypeController.js';

const router = express.Router();

// Rutas para CRUD de usuarios
router.post('/payment_type/new', create);
router.get('/payment_type/list', getAll);
router.get('/payment_type/:id', getById);
router.put('/payment_type/:id', updateById);
router.delete('/payment_type/:id', deleteById);

export default router;
