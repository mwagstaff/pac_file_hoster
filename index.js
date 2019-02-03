const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello!'));

app.use('/lib', express.static('lib', {
    setHeaders: function(res, path) {
        res.type("application/x-ns-proxy-autoconfig");
    }
}));

app.listen(port, () => console.log(`Proxy PAC file server listening on port ${port}!`));