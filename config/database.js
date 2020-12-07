
const database = require('serverless-mysql') ({
    config: {
        host     :  process.env.RDS_LAMBDA_HOSTNAME,
        database :  process.env.RDS_LAMBDA_DATABASE,
        user     :  process.env.RDS_LAMBDA_USER,
        password :  process.env.RDS_LAMBDA_PASSWORD
    }
})

module.exports = database