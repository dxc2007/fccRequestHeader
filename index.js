var express = require('express');

var app = express();

app.get('/', function(req, res) {
    var ip = req.headers['x-forwarded-for'];
    var lang = req.headers['accept-language'];
    
    var re = /\([\w;\_\s]*\)/;
    var OS = req.headers['user-agent'].match(re).toString();
    OS = OS.split('').slice(1,OS.length-1).join('');
    res.send("<code>" + JSON.stringify({"ip": ip, "lang": lang, 'OS': OS}) + "</code>");
    //console.log(req);
});

app.listen(process.env.PORT||8080, function() {
    console.log("Listening on: " + process.env.PORT||8080);
})