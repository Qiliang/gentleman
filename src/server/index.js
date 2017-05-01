'use strict';
const path=require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const controller = require('./controller');
const staticFiles = require('./static');
const rest = require('./rest');
const db = require('./db');
const app = new Koa();

app.use(staticFiles('/static/', __dirname + '/static'));
// Serve static files
app.use(staticFiles('/static/', __dirname + '/static'));
app.use(serve(path.join(__dirname, '../../dist')));

db.init();
app.use(async(ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(bodyParser());

app.use(rest.restify());
app.use(controller());

    app.listen(3000);
    console.log('listening on port 3000...');
