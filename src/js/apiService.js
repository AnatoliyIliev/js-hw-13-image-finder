const API_KEY = '21951124-cbc15cb68780ddc893d0875a8';
const BASE_URL = 'https://pixabay.com/api';

export default class GalleryApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
     }        

    apiService() {  
        const URL = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

        return fetch(URL)
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Error fatching data')
            }).then(({hits})=> {
                this.page += 1;
                return hits;
            })
            .catch(error => console.log(error)
        )        
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}
