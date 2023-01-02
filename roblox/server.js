var express=require('express');
var app=express();

app.use(express.static(path.join(_dirname,'public')));

app.get('/',function(req,res){
    res.sendFile(path.join(-dirname+'/index.html'));
});
app.listen(8080);
console.log("listening on port 8080");