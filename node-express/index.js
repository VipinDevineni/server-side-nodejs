const express = require('express'),
http = require('http'), morgan = require('morgan');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter')

const hostname = 'localhost';
const port = 3000;
const app = express();

app.use(morgan('dev'));
app.use('/dishes', dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);

//The 404 Route (ALWAYS Keep this as the last route)
// app.get('*', function(req, res){
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/html');
//     res.end("<html><body><h2>I couldn't find what you were asking for: " + req.url + "</h2></body></html>");
// });

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});