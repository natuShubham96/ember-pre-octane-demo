import Route from '@ember/routing/route';

export default Route.extend({

    model() {

        return [
            {
                "albumId": 3,
                "id": 126,
                "title": "id reiciendis neque voluptas explicabo quae",
                "url": "https://via.placeholder.com/600/7ef62f",
                "thumbnailUrl": "https://via.placeholder.com/150/7ef62f"
            },
            {
                "albumId": 2,
                "id": 62,
                "title": "dolorem cumque quo nihil inventore enim",
                "url": "https://via.placeholder.com/600/65ad4f",
                "thumbnailUrl": "https://via.placeholder.com/150/65ad4f"
            }
        ]
    }
});
