import {Link} from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import {red} from '@mui/material/colors';
import './SearchResults.scss';

function SearchResultsList(props) {
    let employeesList = props.employeesList;  
    let setEmployeesList = props.setEmployeesList; 

    const handleClick = (e) => {
        const filteredList = employeesList.filter((employee) => parseInt(employee.id) !== parseInt(e.currentTarget.value));
        setEmployeesList(filteredList);
    }
    
    return (
        <>
            <ul className='employee-list-search'>
            {!employeesList? '': employeesList.map((employee) => {
                return (
                    <div className='card' key={employee.id}>
                    <Link to={`/employees/${employee.id}`} className='card__link' >
                        <h2 className='card__name'>{employee.first_name} {employee.last_name}</h2>
                        <p className='card__birthday'>{employee.date_of_birth}</p>
                        {employee.email? <p className='card__email'>{employee.email}</p>: ''}
                        <p className='card__phone'>{employee.phone}</p>
                        <p className='card__hire-date'>{employee.hire_date}</p>
                    </Link>
                    <Button variant="text" value={employee.id} className='card__clear-button' onClick={handleClick}>
                        <ClearIcon sx={{color: red[500]}}/>
                    </Button>
                    </div>
                )
            })}
            </ul>
        </>
)}

export default SearchResultsList;