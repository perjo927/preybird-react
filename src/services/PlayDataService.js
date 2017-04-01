class PlayDataService {

    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    extractPlayData(data) {
        const extractedList = data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
        return this.mapPlayData(extractedList);
    }

    mapPlayData(data) {
        return data.map((d) => {
            return {
                "img": d.content.images.boxart.url,
                "title": d._links.self.title,
                "href": d._links.self.title
            }
        });
    }

    get() {
        // TODO ES6 async await
        return fetch(this.endpoint)
            .then(res => {
                return res.json()
            })

    }
}

export default PlayDataService;