const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/user_login', {useNewUrlParser:true});
mongoose.connection.on('error', function(error){
	console.log("error", error)
});
mongoose.connection.once('open', function(){
	console.log("db connected")
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', function(req, res){
	res.send("Hello World");
});

// app.use(express.static('build'));
// app.set('views', '/build');

// app.get('*', (req, res) => res.sendFile(`${process.cwd()}/build/index.html`))

app.listen(3001, () => console.log('Example app listening on port 3001!'))