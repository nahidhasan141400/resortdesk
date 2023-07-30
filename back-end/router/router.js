const AdminCon = require('../controller/Admin/AdminCon');
const router = (app)=>{
    // router start from heare 
    app.get('/api/admin',AdminCon().getdata)
};

module.exports = router;