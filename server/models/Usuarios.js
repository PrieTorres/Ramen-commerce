import mongoose from 'mongoose';
// muito descontinuado

const usuariosSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        endereco: {type: String, required: true},
        pedidos: [{type: mongoose.Schema.Types.ObjectId, ref: 'pedidos'}]
    }
)

const usuarios = mongoose.model('usuarios', usuariosSchema)


export default usuarios;