import { ImgSmall, ImgLarge } from '../assets/media'

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
                "imgL": d.content.images.landscape.url.concat(`&width=${ImgLarge.w}&height=${ImgLarge.h}`),
                "imgS": d.content.images.landscape.url.concat(`&width=${ImgSmall.w}&height=${ImgSmall.h}`),
                "title": d._links.self.title,
                "href": d._links.self.title
            }
        });
    }

    async get() {
        const res = await fetch(this.endpoint)
        return res.json();
    }
}

export default PlayDataService;