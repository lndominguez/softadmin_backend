// userRoutes.js
import express from 'express';
import {
  create,
  getAll,
  getById,
  updateById,
  deleteById
} from '../controllers/invoicerController.js';

const router = express.Router();

// Rutas para CRUD de usuarios
router.post('/invoicer/new', create);
router.get('/invoicer/list', getAll);
router.get('/invoicer/:id', getById);
router.put('/invoicer/:id', updateById);
router.delete('/invoicer/:id', deleteById);

export default router;
