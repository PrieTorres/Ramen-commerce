import Express from 'express';
import pedidosControllers from '../controllers/pedidosController.js';

const router = Express.Router();

router
    .get('/meus-pedidos', pedidosControllers.listarPedido)
    .put('/meus-pedidos', pedidosControllers.salvarPedido)


export default router

