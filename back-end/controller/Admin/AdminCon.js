const AdminUser = require('../../model/Admin');


const AdminCon = ()=>{
    return {
        getdata:async (req,res)=>{
            try {
                const [data] = await AdminUser.findAll();
                res.send(data);
            } catch (error) {
                console.log("🚀 ~ file: AdminCon.js:7 ~ getdata: ~ error:", error)
                
            }
        }
    }
}

module.exports = AdminCon;