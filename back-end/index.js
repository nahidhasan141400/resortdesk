const express = require('express');
const app = express();
app.use(express.static('./frontEnd'));
const path = require('path');



// api wrote from thear 
const router = require("./router/router")
router(app);


app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname,'frontEnd', 'dist', 'index.html'));
});
// if not in production use the port 5000
const PORT = process.env.PORT || 5000;
console.log('server started on port:',PORT);
app.listen(PORT);