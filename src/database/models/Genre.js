module.exports = (sequelize, dataTypes) => {

    let alias = "Generos";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true
        },
        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }
    };

    let config = {
        tableName: "genres",
        underscored: true
    };

    const Genre = sequelize.define(alias, cols, config);

    return Genre
}