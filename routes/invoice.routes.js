// userRoutes.js
import express from 'express';
import {
  create,
  getAll,
  getById,
  updateById,
  deleteById
} from '../controllers/invoiceController.js';

const router = express.Router();

// Rutas para CRUD de usuarios
router.post('/invoice/new', create);
router.get('/invoice/list', getAll);
router.get('/invoice/:id', getById);
router.put('/invoice/:id', updateById);
router.delete('/invoice/:id', deleteById);

export default router;
