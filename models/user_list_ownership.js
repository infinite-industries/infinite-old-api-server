module.exports = (sequelize, DataTypes) => {
    var user_list_ownership = sequelize.define('user_list_ownership', {
        user_id: DataTypes.UUID,
        event_list_id: DataTypes.UUID
    }, {});

    sequelize.user.belongsToMany(sequelize.event_list, {
        through: user_list_ownership,
        foreignKey: 'user_id',
        otherKey: 'event_list_id'
    })

    return user_list_ownership;
}
