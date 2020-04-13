//require modules
let express = require('express');
let layouts = require('express-ejs-layouts');

//create app instance
let app = express();

//set template langto ejs
app.set('view engine', 'ejs');

//tell express to use the layouts module
app.use(layouts);

//set up static folder
app.use(express.static('static'));

//create a wildcard (catch-all)
app.get('*', (req,res) => {
	res.render('error')
});


app.listen(3000);