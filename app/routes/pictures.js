import Route from '@ember/routing/route';

export default Route.extend({

    model() {

        return [
            {
                "userId": 1,
                "id": 1,
                "title": "quidem molestiae enim"
            },
            {
                "userId": 2,
                "id": 11,
                "title": "quam nostrum impedit mollitia quod et dolor"
            }
        ]
    }
});
