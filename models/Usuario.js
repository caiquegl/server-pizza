module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      idUsuario: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: DataType.STRING,
        allowNull: false,
      },
      email: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
      },
      senha: {
        type: DataType.STRING,
        allowNull: false,
      },
      telefone: {
        type: DataType.STRING,
        allowNull: false,
      },
      cpf: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
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
      },
      createdAt: {
        allowNull: false,
        type: DataType.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataType.DATE,
      }
    },
    {
      tableName: "usuarios",
    }
  );




  return Usuario;
};
