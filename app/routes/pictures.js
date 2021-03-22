import Route from '@ember/routing/route';

export default Route.extend({

    async model() {

        // return this.store.findAll('picture');

        // let response = await fetch('/pictures');
                let response = await fetch('https://jsonplaceholder.typicode.com/photos');
    let parsed = await response.json();
    return parsed;
    }
});
