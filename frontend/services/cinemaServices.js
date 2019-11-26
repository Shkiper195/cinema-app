export default class cinemaServices {
    constructor() {
        this._apiBase = 'https://thawing-fjord-70166.herokuapp.com'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}: received ${res.status}`);
        }

        return await res.json();
    }

    getAllMovies = async () => {
        const res = await this.getResource('/movies/');
        return res;
    }
}