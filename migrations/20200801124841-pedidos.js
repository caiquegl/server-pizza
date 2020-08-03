module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("pedidos", {
      idPedidos: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CpfUsuario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pizza: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      obsPedido: {
        type: Sequelize.STRING,
      },
      massaDaPizza: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tamanhoDaPizza: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      adicionais: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      enderecoCadastrado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rua: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complemento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      statusPedido: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pagamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("pedidos");
  },
};