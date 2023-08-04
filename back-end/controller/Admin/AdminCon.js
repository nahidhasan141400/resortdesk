const AdminUser = require('../../model/Admin');


const AdminCon = ()=>{
    return {
        getdata:async (req,res)=>{
            try {
                const tres = await AdminUser.Add({
                    username:"nahid",
                    phone:"0174",
                    email:'nahid#gmail.com',
                    photo:"nophoto.png",
                    status:"1"
                });
                console.log("🚀 ~ file: AdminCon.js:11 ~ getdata: ~ tres:", tres)
                const [data] = await AdminUser.findAll();
                res.send(data);
            } catch (error) {
                console.log("🚀 ~ file: AdminCon.js:7 ~ getdata: ~ error:", "error")
                
            }
        }
    }
}

module.exports = AdminCon;