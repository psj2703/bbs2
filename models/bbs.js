module.exports = (sequelize, DataTypes) => {
    const bbs = sequelize.define('bbs', {
        // Model attributes are defined here
        title: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
        }, {
            sequelize,
            timestaps: false,
            uderscored: false,
            modelName: 'bbs',
            tableName: 'bbs',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
    });

    return bbs;
}