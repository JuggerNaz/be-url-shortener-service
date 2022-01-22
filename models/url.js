module.exports = (sequelize, Sequelize) => {
    const Url = sequelize.define('Url', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      original: {
        type: Sequelize.STRING(500),
        allowNull: true,
        defaultValue: null,
      },
      hashcode: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null,
      },
    }, {
        tableName: 'Url',
        timestamps: true
      })
    return Url;
  };