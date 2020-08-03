const Sequelize = require('sequelize');
const { Pedido } = require("../models");
const Op = Sequelize.Op

const pedidoController = {

  create: async (req, res) => {
    const { pizza, tamanhoDaPizza, massaDaPizza, adicionais, CpfUsuario, idUser, enderecoCadastrado, data, pagamento, statusPedido ,telefone, cep, rua, numero, bairro, complemento, obsPedido } = req.body;
    
      await Pedido.create({
        pizza,
        tamanhoDaPizza,
        massaDaPizza,
        adicionais,
        CpfUsuario,
        idUser,
        enderecoCadastrado,
        data,
        pagamento,
        statusPedido,
        telefone,
        cep,
        rua,
        numero,
        bairro,
        obsPedido,
        complemento,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return res.send("Pedido feito")
  },
  pedidoPorCPF: async (req, res) => {
    const { CpfUsuario } = req.body;
    
        const [usuario] = await Pedido.findAll({

            where: {
              CpfUsuario,
            }
            
        });

        
        if (!usuario) {
          return res.send({msg:"Usuario não fez pedido ainda"});
        }else {

            const usuarioComPedido = await Pedido.findAll({

                where: {
                  CpfUsuario,
                }
                
            });
          res.send(usuarioComPedido);
        }
  },
  pedidoId: async (req, res) => {
    const { idPedidos } = req.body;
    
        const usuario = await Pedido.findAll({

            where: {
              idPedidos,
            }
            
        });

        
        if (!usuario) {
          return res.send({msg:"Usuario não fez pedido ainda"});
        }else {
            
          res.send(usuario);
        }
  },
  infoPedidoUser: async (req, res) => {
    const { idPedido, cpf } = req.body;
    
        const usuario = await Pedido.findAll({

            where: {
              idPedidos: idPedido,
              CpfUsuario: cpf,
            }
            
        });

        
        if (!usuario) {
          return res.send({msg:"Usuario não fez pedido ainda"});
        }else {
            
          res.send(usuario);
        }
  },
  atualizarPedido: async (req, res) => {

    const {idPedidos, pizza, tamanhoDaPizza, massaDaPizza, adicionais, CpfUsuario, idUser, enderecoCadastrado, data, pagamento, statusPedido ,telefone, cep, rua, numero, bairro, complemento, obsPedido } = req.body;
    
    await Pedido.update({
        pizza,
        tamanhoDaPizza,
        massaDaPizza,
        adicionais,
        CpfUsuario,
        idUser,
        enderecoCadastrado,
        data,
        pagamento,
        statusPedido,
        telefone,
        cep,
        rua,
        numero,
        bairro,
        obsPedido,
        complemento,
        createdAt: new Date(),
        updateAt: new Date,
    },{
        where:{
            idPedidos,
            
        }});

        res.send("atualizado");
},
  todosPedidos: async (req, res) => {
      
    
        const usuario = await Pedido.findAll({
          order:[
            ['idPedidos', 'DESC']
          ]
        }); 
       
          res.send(usuario);
  },
  countPreparando: async (req,res) => {

    const pedidos = await Pedido.count({
        where:{
            statusPedido:"preparando"
        }
    });

    res.send({preparando: pedidos});
  },

  removerPedido: async (req,res) => {
    const { idPedidos } = req.body;

    await Pedido.destroy({    
        where: {
                idPedidos,
            }
    });

    res.send("Pedido excluido");
  },
  agendados: async (req, res) => {
    const {agendados} = req.body;


    var query = `%${agendados}%`;
    
    let validando = await Pedido.findAll({

      where:{
        statusPedido:{
            [Op.like]: query
          }
        }
    });

    
    
      res.send(validando);  
  },

  search: async (req, res) => {
    const {atualizacao, CpfUsuario} = req.body;


    var query = `%${atualizacao}%`;
    
    let validando = await Pedido.findAll({

      where:{
        statusPedido:{
            [Op.like]: query
          },
          CpfUsuario
      }
    });

    
    
      res.send(validando);  
  },
  pedidosHoje: async (req, res) => {
    const {data} = req.body;


    var query = `%${data}%`;
    
    let validando = await Pedido.findAll({
     
      where:{
        data:{
            [Op.like]: query
          }
        }
    });

    
    
      res.send(validando);  
  }


};

module.exports = pedidoController;
