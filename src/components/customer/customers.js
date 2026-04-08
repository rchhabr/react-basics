import { useState, useEffect } from 'react';
import './customers.css';
import getCustomers from '../../services/customer.service';


function Customers() {
    const [Customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
            const data = await getCustomers();
            console.log(data);
            setCustomers(data);
        } catch (err) {
            console.error(err);
        }
        }
        fetchData();
    }, [])
    

    return (
        <div className="Customers-container">
            {
                Customers.map((customer) => (   
                    <div className='customer'>
                    <div className='title'>{customer.id}</div>
                    <div className='name'>{customer.name}</div>
                    <div className='name'>{customer.email}</div>
                    </div>
            ))
            }
        </div>
    )
}

export default Customers;