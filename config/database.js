
const database = require('serverless-mysql') ({
    config: {
        host: 'database-baknd-t.cyrpewedmx9i.us-east-1.rds.amazonaws.com',
        database: 'schemakp',
        user: 'admin',
        password: 'administrator' 
    }
})

module.exports = database