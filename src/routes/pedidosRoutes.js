import Express from 'express';
import pedidosControllers from '../controllers/pedidosController.js';

const router = Express.Router();

router
    .get('/pedidos', pedidosControllers.listarPedido)
    .post('/pedidos', pedidosControllers.salvarPedido)
    .delete('/deletar-pedido/:id', pedidosControllers.excluirPedido)


export default router

