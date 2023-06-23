import { useState } from 'react';
import axios from 'axios';

import './SearchBox.scss';

function SearchBox(props) {

    const [employeeInfo, setEmployeeInfo]=useState([]);
    let setEmployeesList= props.setEmployeesList;

    
        const handleChange = (e) => {
            if(e.target.checked ) {
                setEmployeeInfo([
                    ...employeeInfo,
                    e.target.value
                ])
            } else {
                setEmployeeInfo(
                    employeeInfo.filter((item) => item !== e.target.value )
                )
            }
        }
   
    const handleSubmit = () => {
        console.log(employeeInfo)
        let option1 = employeeInfo[0]? `option1=${employeeInfo[0]}`:'';
        let option2 = employeeInfo[1]? `option2=${employeeInfo[1]}`:'';
        let option3 = employeeInfo[2]? `option3=${employeeInfo[2]}`:'';
        let option4 = employeeInfo[3]? `option4=${employeeInfo[3]}`:'';
        let option5 = employeeInfo[4]? `option5=${employeeInfo[4]}`:'';
        let option6 = employeeInfo[5]? `option6=${employeeInfo[5]}`:'';
        axios.get(`http://localhost:8080/employees?${option1}&${option2}&${option3}&${option4}&${option5}&${option6}`
        )
        .then((res)=> {
            setEmployeesList(res.data);
        })
       
    }

    return (
        <>
            <fieldset className='search-box'>
                <h2 className='search-box__title'>Search</h2>
                <div className='checkbox__container'>
                    <div>
                    <input 
                        className='checkbox__option' 
                        type='checkbox' 
                        name='search' 
                        value='first_name'
                        onChange={handleChange}
                    />
                    <label className='checkbox__label' htmlFor='first-name'>First Name</label>
                    </div>
                    <div>
                    <input 
                        className='checkbox__option' 
                        type='checkbox' 
                        name='search' 
                        value='last_name'
                        onChange={handleChange}
                    />
                    <label className='checkbox__label' htmlFor='last-name'>Last Name</label>
                    </div>
                    <div>
                    <input 
                        className='checkbox__option' 
                        type='checkbox' 
                        name='search' 
                        value='date_of_birth'
                        onChange={handleChange}
                    />
                    <label className='checkbox__label' htmlFor='date-of-birth'>Birthdate</label>
                    </div>
                    <div>
                    <input 
                        className='checkbox__option' 
                        type='checkbox' 
                        name='search' 
                        value='email'
                        onChange={handleChange}
                    />
                    <label className='checkbox__label' htmlFor='email'>Email</label>
                    </div>
                    <div>
                    <input 
                        className='checkbox__option' 
                        type='checkbox' 
                        name='search' 
                        value='phone'
                        onChange={handleChange}
                    />
                    <label className='checkbox__label' htmlFor='phone'>Phone</label>
                    </div>
                    <div>
                    <input 
                        className='checkbox__option' 
                        type='checkbox' 
                        name='search' 
                        value='hire_date'
                        onChange={handleChange}
                    />
                    <label className='checkbox__label' htmlFor='hire-date'>Hire Date</label>
                    </div>
                    <div className='checkbox__submit'>
                        <button 
                        className='checkbox__submit-button' 
                        type='submit'
                        onClick={handleSubmit}
                        >
                        SEARCH
                        </button>
                    </div>
                </div>
            </fieldset>
        </>
    )
}

export default SearchBox;