const Sequelize = require('Sequelize')

var sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    storage: 'database.sqlite'
});

var Spider = sequelize.define('spider', {
    name: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    lastName: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});

var SpiderCode = sequelize.define('spiderCode',{
    name: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    spider: {
        type: Sequelize.STRING
    },
    code: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});


module.exports = {

    Spider:Spider,
    SpiderCode:SpiderCode,

    init(){
        Spider.sync({force: false}).then(()=> {

        });
        SpiderCode.sync({force: false}).then(()=> {

        });
    }
}
