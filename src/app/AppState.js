import {observable} from 'mobx';
import http from './http';

class AppState {
    @observable timer = 0;
    @observable visible = false;
    @observable spiders = [];

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    async refreshSpider() {
        let response = await http.get('/api/spiders');
        this.spiders = response.spiders;
    }

    resetTimer() {
        this.timer = 0;
    }
}

export default AppState;
