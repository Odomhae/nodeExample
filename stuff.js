var express = require('express'),
    http = require('http'),
    path = require('path');

var bodyParser = require('body-parser'),
    static = require('serve-static');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({
    extended: false // 없으면 안되고 true로 해도 되는듯? 
}));
 
app.use(bodyParser.json()); // 없어도 잘되는듯?  

app.use('/public', static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    console.log('첫번째 미들에서 요청을 처리함');
    // res.redirect('http://google.co.kr');

    var paramId = req.body.id || req.query.id; //body는 POST 방식 , query는 GET방식
    var paramPassword = req.body.password || req.query.password;

    req.user = "mike";
    res.writeHead('200', {        'Content-Type': 'text/html;charset=utf8' });
    res.write('<h1> Express ' + req.user + ' 합격을 축하드립니다 오도매</h1>');
    res.write('<div><p>Param Id : ' + paramId + '</p></div>');
    res.write('<div><p>Param Password : ' + paramPassword + '</p></div>');
    res.write("<br><br><a href='/public/login2.html'> 로그인 페이지로 돌아가기</a>");
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
