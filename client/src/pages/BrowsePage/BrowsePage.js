import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import folder from '../../assets/images/folder-g.png';
import './BrowsePage.scss';

function BrowsePage() {
    const [employeeData, setEmployeeData] = useState([]);

    useEffect(() => {
        const getEmployeeData = async () => {
            try {
                const responseData = await axios.get('http://localhost:8080/employees/browse')
                setEmployeeData(responseData.data);
            } catch (err) {
                console.log(err)
            }
        }
        getEmployeeData();
    }, [])

    return (
        <>
            <ul className='employee-browse-list'>
            {(!employeeData)? '': employeeData.map((employee) => {
                return (
                    <Link to={`/employees/${employee.id}`} key={employee.id} className='employee-card'>
                        <h2 className='employee-card__first-name'>{employee.first_name}  {employee.last_name}</h2>
                    </Link>
                )
            })}
            </ul>
        </>
    )
}

export default BrowsePage;
