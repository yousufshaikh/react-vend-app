const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');
const UserSession = require('./models/UserSession');
const signIn = require('./routes/Signin');
const signUp = require('./routes/Signup');
const logOut = require('./routes/Logout');
const verify = require('./routes/Verify');
const adPost = require('./routes/Post');

app.use(cors())

mongoose.connect('mongodb://localhost:27017/react_vend_app', {useNewUrlParser:true});
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

app.use('/account', signIn);
app.use('/account', signUp);
app.use('/account', logOut);
app.use('/account', verify);
app.use('/post',adPost);

// app.get('/',function(req, res) {
// 	res.send("App is running on localhost:3001");
// })

// app.use(express.static('build'));
// app.set('views', '/build');

// app.get('*', (req, res) => res.sendFile(`${process.cwd()}/build/index.html`))

app.listen(3001, () => console.log('Example app listening on port 3001!'));
