import mongoose from "mongoose";

const pedidosSchema = new mongoose.Schema (
    {
        id: {type: String},
        itens: {type: Array},
        preco: {type: String},
        pagamento: {type: String, required: true}, // string com o objeto do formulario pagamento
        horaPedido: {type: Date},
        cliente: {type: mongoose.Schema.Types.ObjectId, ref: 'usuarios', required: true}
    }
);

const pedidos = mongoose.model('pedidos', pedidosSchema)

export default pedidos;

