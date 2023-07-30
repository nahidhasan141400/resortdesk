const Schema = require('../database/schema');
const Model = require('../database/Model');

const AdminSchema = new Schema({
    username:{
        type:'TEXT(255)',
        req:true,
        defaults:"nahid"
    },
    status:{
        type:"INT(255)",
        req:true,
    }
});

const AdminUser = new Model(AdminSchema,"admin")

module.exports = AdminUser;