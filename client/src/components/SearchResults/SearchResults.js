import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './SearchResults.scss';
import axios from 'axios';

function SearchResultsList() {
    const [employeesList, setEmployeesList] = useState([]);

    useEffect(() => {
        const getEmployeeList = async () => {
            try {
                const employeeListData = await axios.get('http://localhost:8080/employees')
                setEmployeesList(employeeListData.data)
            }
            catch (err) {
                console.log(err)
            }}
            getEmployeeList();
    }, []);

    
    return (
        <>
            <ul className='employee-list'>
            {employeesList.map((employee) => {
                console.log(employee)
                return (
                    <Link to={`/${employee.id}`} key={employee.id} className='card'>
                        <h2 className='card__name'>{employee.first_name} {employee.last_name}</h2>
                        <p className='card__birthday'>{employee.date_of_birth}</p>
                        <p className='card__email'>{employee.email}</p>
                        <p className='card__phone'>{employee.phone}</p>
                        <p className='card__hire-date'>{employee.hire_date}</p>
                    </Link>
                )
            })}
            </ul>
        </>
)}

export default SearchResultsList;