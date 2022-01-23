require('dotenv').config();

const cookieParser = require('cookie-parser');

const express = require('express'),
    app = express(),
    port = process.env.PORT,
    cors = require('cors')
    server = app.listen(port,() => console.log(`Listening on port ${port}`));

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}),express.json(),express.urlencoded({extended:true}));


require('./server/config/database.config');
require('./server/routes/grocery.routes')(app);
require('./server/routes/user.routes')(app); 
