import {Link} from 'react-router-dom';
import './SearchResults.scss';

function SearchResultsList(props) {
    let employeesList = props.employeesList;   

    
    return (
        <>
            <ul className='employee-list'>
            {employeesList.map((employee) => {
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