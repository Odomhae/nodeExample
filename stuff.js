var express = require('express'),
    http = require('http');


var app = express();


app.use(function (req, res, next) {
    console.log('첫번째 미들에서 요청을 처리함');
    // res.redirect('http://google.co.kr');

    var userAgent = req.header('User-Agent');
    var paramName = req.query.name;
    
   // req.user = "mike";
    res.writeHead('200', {        'Content-Type': 'text/html;charset=utf8'});
    res.write('<h1> Express ' + req.user + ' 합격을 축하드립니다 오호</h1>');
    res.write('<div><p>User-Agent : ' + userAgent + '</p></div>');
      res.write('<div><p>Param name : ' + paramName + '</p></div>');
    res.end();
    //  next();
});

/*app.use(function(req,res,next){
    
    console.log('두번째 미들에서 요청을 처리함');
    res.redirect('http://google.co.kr');
   // res.end('<h1> Express '+ req.user+ ' 합격을 축하드립니다dkdkdkdkdk 오호</h1>' );
    
}) */

http.createServer(app).listen(3000, function () {
    console.log(' 3000번 포드에서 서버가 시작됨 ');
});
