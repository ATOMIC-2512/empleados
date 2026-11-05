import { useState, useEffect } from 'react';
import Usuarios from './Usuarios';
import './App.css';

const API_URL = 'https://randomuser.me/api/?results=12';

// randomuser.me no incluye empresa, así que se asigna una de esta lista
const COMPANIES = [
  'Acme Corp',
  'Globex',
  'Initech',
  'Umbrella Inc',
  'Stark Industries',
  'Wayne Enterprises',
];

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      const list = data.results.map((person, index) => ({
        id: person.login.uuid,
        name: `${person.name.first} ${person.name.last}`,
        email: person.email,
        phone: person.phone,
        company: COMPANIES[index % COMPANIES.length],
      }));

      setEmployees(list);
    } catch (error) {
      console.error('Error al cargar empleados:', error);
      setEmployees([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="app">
      <h1>Employee Directory</h1>

      {loading ? (
        <p className="message">Loading...</p>
      ) : employees.length === 0 ? (
        <p className="message">No employees found.</p>
      ) : (
        <div className="grid">
          {employees.map((employee) => (
            <Usuarios key={employee.id} user={employee} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;