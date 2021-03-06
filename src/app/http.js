require('es6-promise').polyfill();
require('isomorphic-fetch');

export default {
    async post(url,body={}){
       let response= await fetch(`${url}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
       return response.json();
    },

    async get(url){
        let response= await fetch(`${url}`);
        return response.json();
    }

}