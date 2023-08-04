const Schema = require('../database/schema');
const Model = require('../database/Model');

const AdminSchema = new Schema({
    username:{
        type:'TEXT(255)',
        req:true,
        unique:true
    },
    email:{
        type:'TEXT(255)',
        req:true,
        unique:true
    },
    phone:{
        type:'TEXT(255)',
        req:true,
        unique:true
    },
    photo:{
        type:'TEXT(255)',
        req:false,
        unique:false
    },
    details:{
        type:'TEXT(255)',
        req:false,
        unique:false
    },
    status:{
        type:"INT(255)",
        req:true,
    }
});

const AdminUser = new Model(AdminSchema,"admin")

module.exports = AdminUser;