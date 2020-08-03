module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define(
    "Pedido",
    {
      idPedidos: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idUser: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      telefone: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      CpfUsuario: {
        type: DataType.STRING,
        allowNull: false,
      },
      pizza: {
        type: DataType.STRING,
        allowNull: false,
      },
      obsPedido: {
        type: DataType.STRING,
      },
      massaDaPizza: {
        type: DataType.STRING,
        allowNull: false,
      },
      tamanhoDaPizza: {
        type: DataType.STRING,
        allowNull: false,
      },
      adicionais: {
        type: DataType.STRING,
        allowNull: false,
      },
      enderecoCadastrado: {
        type: DataType.STRING,
        allowNull: false,
      },
      cep: {
        type: DataType.STRING,
        allowNull: false,
      },
      bairro: {
        type: DataType.STRING,
        allowNull: false,
      },
      rua: {
        type: DataType.STRING,
        allowNull: false,
      },
      numero: {
        type: DataType.STRING,
        allowNull: false,
      },
      complemento: {
        type: DataType.STRING,
        allowNull: false,
      },
      statusPedido: {
        type: DataType.STRING,
        allowNull: false,
      },
      pagamento: {
        type: DataType.STRING,
        allowNull: false,
      },
      data: {
        type: DataType.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataType.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataType.DATE,
      },
    },
    {
      tableName: "pedidos",
    }
  );




  return Usuario;
};
