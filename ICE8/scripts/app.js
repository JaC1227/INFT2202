const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!');
}).listen(3000);

fs.readFile('/path/to/file', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
})

const content = 'This is the content to write to the file';

fs.writeFile('/path/to/file', content, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File written successfully');
})

const content2 = 'This is the new content to append to the file';

fs.appenedFile('/path/to/file', content2, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File updated successfully');
})

fs.unlink('/path/to/file', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File deleted successfully');
})

const express = require('express');

var exphbs = require('express-handlebars');

// initializes method
const app = express();

// Set up the handlebars engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

// how middlewear works
app.get('/', function (req, res) {
    const title = 'Home for WEBD 6201 Node101 with Handlebars'
    res.render('home', {
        title: title
    });
});