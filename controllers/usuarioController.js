const { Usuario } = require("../models");
const bcrypt = require("bcryptjs");

const usuarioController = {
  create: async (req, res) => {
    const { nome, email, senha, cpf, telefone, cep, rua, numero, bairro, complemento } = req.body;
    const hashPassword = bcrypt.hashSync(senha, 8);

    const usuario = await Usuario.findAll({
      where: {
        email,
      }
    });

    if (!usuario.length < 1) {
      return res.send({msg: "CPF ja cadastrado"});
    } else {
      const user = await Usuario.create({
        nome,
        email,
        senha: hashPassword,
        cpf,
        telefone,
        cep,
        rua,
        numero,
        bairro,
        complemento,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return res.send({msg: "Cadastrado"})

    }

  },
  logando: async (req, res) => {
    const { email, senha } = req.body;
    
        const [usuario] = await Usuario.findAll({

            where: {
              email,
            }
            
        });

        
        if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
          return res.send({msg:"Email ou senha errados!"});
        }else {
          let nome = usuario.nome;
          
          res.send(usuario);
        }

        

  },
  todosUsuarios: async (req, res) => {
    
        const usuario = await Usuario.findAll();

          res.send(usuario);

  },
  usuarioPorCPF: async (req, res) => {
    const { cpf } = req.body;
    
        const [usuario] = await Usuario.findAll({

            where: {
              cpf,
            }
            
        });

        
        if (!usuario) {
          return res.send({msg:"CPF não encontrado!!"});
        }else {
          res.send(usuario);
        }

  },
};

module.exports = usuarioController;
