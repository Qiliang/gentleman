const HTML=`
<html>
  <head>
    <link rel="shortcut icon" href="/favicon.ico">
    <title>信息采集</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="bundle.js"></script>
  </body>
</html>
`


module.exports = {
    'GET /abc': async (ctx, next) => {
        ctx.response.body =HTML;
        await next();
    }
};