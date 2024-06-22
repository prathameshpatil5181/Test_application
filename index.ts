//imports
import express from 'express';
import path from 'path'





//application code
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    console.log(req);
    res.status(200).sendFile(path.join(__dirname,'index.html'));
})

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})