import mongoose from "mongoose";

const pedidosSchema = new mongoose.Schema (
    {
        id: {type: String},
        itens: {type: Array},
        preco: {type: String},
        pagamento: {type: String, required: true},
        horaPedido: {type: Date},
        imagem: {type: String},
        //cliente: {type: mongoose.Schema.Types.ObjectId, ref: 'usuarios'}
        cliente: {type: Object}
    }
);

const pedidos = mongoose.model('pedidos', pedidosSchema)

export default pedidos;

