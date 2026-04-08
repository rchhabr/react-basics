import { useState } from "react";
import './addCustomerFrom.css';
import getCustomers, { deleteCustomer, postCustomer } from '../../services/customer.service';

function AddCustomerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const [customers, setCustomers] = useState([]);

  // Handle form input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add a new customer
  const handleAddCustomer = async (e) => {
    e.preventDefault();
    try {
      const response = await postCustomer(form);
      handleGetCustomers();
      alert(`Customer added: ${response.name}`);
      console.log(response);
      setForm({ name: "", email: "", phone: "", address: "" });
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  // Fetch customers only when button clicked
  const handleGetCustomers = async () => {
    try {
      const response = await getCustomers();
      setCustomers(response);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete?")) return;

  try {
      await deleteCustomer(id);
      setCustomers(customers.filter(c => c.id !== id));
      //const updatedCustomers = await getCustomers();
      //setCustomers(updatedCustomers);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="customers-container">

      {/* Add Customer Form */}
      <form onSubmit={handleAddCustomer} className="customer-form">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
        <input name="address" value={form.address} onChange={handleChange} placeholder="Address" required />

        <button type="submit">Add Customer</button>
        <button type="button" onClick={handleGetCustomers}>Get Customers</button>
      </form>

      {/* Display Customers */}
      <div className="customer-list">
        {customers.map((customer) => (
          <div key={customer.id} className="customer-row">
            <div className="customer-id">{customer.id}</div>
            <div className="customer-name">{customer.name}</div>
            <div className="customer-email">{customer.email}</div>
            <button onClick={() => handleDelete(customer.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddCustomerForm;