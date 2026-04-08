
// const END_POINT_PREFIX = 'https://jsonplaceholder.typicode.com';

const END_POINT_PREFIX = 'http://localhost:8080';

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

    async post(url, form) {
        const response = await fetch(this.endPoint + url, {method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
        const jsonData = await response.json();
        return jsonData;
    }

    async delete(url) {
        const response = await fetch(this.endPoint + url, {method: "DELETE"});
        return response;
    }
}