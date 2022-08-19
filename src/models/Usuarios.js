import mongoose from 'mongoose';

const usuarios = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        endereco: {type: String, required: true}
    }
)

export default usuarios;