require('es6-promise').polyfill();
require('isomorphic-fetch');

export default {
    async post(url,body={}){
        await fetch(url,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
    }

}