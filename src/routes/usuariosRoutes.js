import Express from 'express';
import usuariosController from '../controllers/usuariosController.js'

const router = Express.Router();

router
    .get('/usuarios', usuariosController.listarUsuarios)
    .put('/usuarios', usuariosController.cadastrarUsuario)



export default router