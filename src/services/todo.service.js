import { ApiService } from "./api.service";

export default function getTodos() {
    const apiService = new ApiService();
    return apiService.get('/todos');
}