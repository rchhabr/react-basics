import { ApiService } from "./api.service";

export default function getCustomers() {
    const apiService = new ApiService();
    return apiService.get('/customers');
}

export function postCustomer(form) {
    const apiService = new ApiService();
    return apiService.post('/customers', form);
}

export function deleteCustomer(id) {
    const apiService = new ApiService();
    return apiService.delete(`/customers/${id}`);
}