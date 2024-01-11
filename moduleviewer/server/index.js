const express = require('express');

const fruitComponentPath = '../fruit/src/pages';
var fs = require('fs');

const app = express();
const lg = console.log;

app.use(express.static('C:/Users/woori/Desktop/M/react/moduleviewer/server/build'));

app.get('/', (req, res) => {
    lg('서버 루트 요청')
    res.send("<script>document.location.href='/fruit_build/';</script>");
})

app.get('/getFileList', (req, res) => {
    fs.readdir(fruitComponentPath, function (error, filelist) {
        console.log(filelist[0]);
        res.send(filelist);
    });
})


app.get('*', (req, res) => {
    lg('잘못된 주소')
    res.send("잘못된 주소");
})

app.listen(3300, () => {
    lg(`3300 서버 실행`)
})