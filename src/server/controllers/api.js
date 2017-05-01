const _ = require('lodash');
const db = require('../db');

var products = [{
    name: 'iPhone',
    price: 6999
}, {
    name: 'Kindle',
    price: 999
}];

module.exports = {
    'GET /api/spiders': async(ctx, next) => {
        ctx.response.type = 'application/json';

        ctx.response.body = {
            spiders: await db.Spider.findAll()
        };
    },

    'POST /api/spiders': async(ctx, next) => {
        console.log(ctx.request.body)
        console.log(ctx.request)
        var p = {
            name: ctx.request.body.name,
        };
        ctx.response.type = 'application/json';
        try {
            await db.Spider.create({name: p.name});
            const spider = await  db.Spider.findById(p.name);
            ctx.response.body = spider;
        } catch (e) {
            ctx.response.body = e;
        }


    },
    'GET /api/spiders/:name': async(ctx, next) => {
        ctx.response.type = 'application/json';
        ctx.response.body = _.find(products, (item) => item.name === ctx.params.name);
    },
};