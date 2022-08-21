import usuarios from '../models/Usuarios.js'

class usuariosController {
    static listarUsuarios = (req, res) => {
        usuarios.find()
        .populate('pedidos')
        .exec((err, usuarios) => {
            if(!err){
                res.status(200).json(usuarios)
            }else{
                res.status(500).send({message: `erro ao listar usuarios - ${err.message}`})
            }
        })
    }

    static cadastrarUsuario = (req, res) => {
        let usuario = new usuarios(req.body);

        usuario.save((err) => {
            if(err){
                res.status(501).send({message: `${err.message} - falha ao cadastrar cliente ;( `});
            }else{
                res.status(200).send(usuario.toJSON());
            }
        })
    }
}

export default usuariosController;