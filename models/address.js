module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    userId: DataTypes.INTEGER,
    Street: DataTypes.STRING(255),
    number: DataTypes.INTEGER(),
    complement: DataTypes.STRING(15),
    district: DataTypes.STRING(45),
    city: DataTypes.STRING(45),
    cep: DataTypes.INTEGER(),
    // createdAt: DataTypes.DATE,
    // updatedAt: DataTypes.DATE,
  }, { 
    tableName: 'address',
    underscored: true,
    timestamps: false,
  })

  Address.associate = (models) => {
    Address.belongsTo(models.User, {
      foreignKey: 'UserId',
      as: 'user',
    });
  }
  
  return Address;
};