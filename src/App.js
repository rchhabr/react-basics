import './App.css';
import AddCustomerForm from './components/customer/addCustomerForm';
import Customers from './components/customer/customers';
import Todos from './components/todos/todos';

function App() {
  return (
    <div className="App">
      {/* <Todos/> */}
      <AddCustomerForm/>
      {/* <Customers/> */}
    </div>
  );
}

export default App;