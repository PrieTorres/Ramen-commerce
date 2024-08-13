import pedidos from '../models/Pedidos.js';

class pedidosControllers {

    static listarPedido = (req, res) => {
        pedidos.find()
        //.populate('cliente')
        .exec((err, pedidos) => {
            if(err){
                res.status(500).send({message: `falha ao listar pedidos, log: ${err.message}`})
            }else {
                res.status(200).json(pedidos)
            }
        })
    }

    static salvarPedido = (req, res) => {
        let pedido = new pedidos(req.body);

        pedido.save((err) => {
            if(err){
            res.status(500).send({message: `${err.message} - falha ao cadastrar o pedido, ;(`});
            }else{
            res.status(201).send(pedido.toJSON());
            }
        });
    }

    static excluirPedido = (req, res) => {
        let id = req.params.id;
        pedidos.findByIdAndDelete(id, (err) => {
            if(err){
              res.status(500).send({message: `O pedido ${id} nao foi deletado`});
            }else{
              res.status(200).send({message: 'Pedido deletado com sucesso'});
            }
          });
    }

}

export default pedidosControllers;