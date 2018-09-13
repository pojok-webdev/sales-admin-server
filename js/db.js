var mysql = require('promise-mysql'),
    configs = require('./configs'),
    execute = (sql,callback) => {
        con = mysql.createConnection(configs.mysql)
        .then(cn => {
            var qry = cn.query(sql)
            cn.end
            return qry
        })
        .then(rows => {
            callback(rows)
        })
        .error(err => {
            callback(err)
        })
    }
module.exports = {
    execute:execute
}