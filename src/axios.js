import axios from 'axios';

const API_KEY = 'cf880e297fdd5acf5d269ef59f7f9f00';

const instance = axios.create({
	baseURL: `https://www.flickr.com/services/rest/?api_key=${API_KEY}&format=json&nojsoncallback=1`,
});

export default instance;