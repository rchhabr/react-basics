
const END_POINT_PREFIX = 'https://jsonplaceholder.typicode.com';

export class ApiService {
    endPoint = '';
        constructor(endPoint) {
            this.endPoint = endPoint || END_POINT_PREFIX;
        }
    
    async get(url) {
        const response = await fetch(this.endPoint + url);
        const jsonData = await response.json();
        return jsonData;
    }
}