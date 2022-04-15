const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.set('port', 4000);

app.use(myconnectio(mysql, {
    host: 'localhost',
    user: 'root',
    password: '12345678',
    port: 3306,
    database: 'desarrolloweb'

}));

app.listen(app.get('port'), () => {
    console.log('Listening on port ', app.get('port'))
});