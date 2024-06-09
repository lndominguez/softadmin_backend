// userRoutes.js
import express from 'express';
import {
  create,
  getAll,
  getById,
  updateById,
  deleteById
} from '../controllers/providerController.js';

const router = express.Router();

// Rutas para CRUD de usuarios
router.post('/provider/new', create);
router.get('/provider/list', getAll);
router.get('/provider/:id', getById);
router.put('/provider/:id', updateById);
router.delete('/provider/:id', deleteById);

export default router;
