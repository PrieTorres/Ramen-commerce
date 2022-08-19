import mongoose from 'mongoose';
import pedidos from '../models/Pedidos';

class pedidosControllers {

    static listarPedido = (req, res) => {
        pedidos.find()
        .populate('usuarios')
        .exec((err, pedidos) => {
            if(err){
                res.status(500).send({message: `falha ao listar pedidos, log: ${err.message}`})
            }else {
                res.status(200).json(pedidos)
            }
        })
    }

    static salvarPedido = (req, res) => {
        let pedido = req.body;

        pedido.save((err) => {
            if(err){
            res.status(500).send({message: `${err.message} - falha ao cadastrar o pedido, ;(`});
            }else{
            res.status(201).send(pedido.toJSON());
            }
        });
    }

}

export default pedidosControllers;