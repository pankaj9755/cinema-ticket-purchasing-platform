import {
    Sequelize,
    DataTypes,
    IntegerDataType
} from 'sequelize';

export default (sequelize: Sequelize, DataTypes) => {
    var User = sequelize.define('Users', {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mobilNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return User
};
