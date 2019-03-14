
const mongoose = require('mongoose');

exports.db_info = {}
exports.connect = async(db_info) => {
    connectionString = `mongodb://${db_info.db_server}:${db_info.db_port}/${db_info.db_name}`;
    connectionOptions = {
        useNewUrlParser: true,
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 500,
        auth: {
            authSource: db_info.db_auth
        },
        user: db_info.db_user,
        pass: db_info.db_pwd
    };
    return await mongoose.connect(connectionString, connectionOptions).then(
        () => {
            console.log('Connect to DB...');
        },
        err => {
            console.log(connectionString);
            console.log(process.env.DEBUG ? err : err.message);
        });
}
