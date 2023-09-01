import { useState } from 'react';
import { useNavigate } from 'react-router';
import {createPortal} from 'react-dom';
import axios from 'axios';
import './AddEmployeePage.scss';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import NewEmployeeModal from '../../components/NewEmployeeModal/NewEmployeeModal';

function AddEmployeePage({alertModal, setAlertModal, alertMessage, setAlertMessage}) {
    const [newEmployee, setNewEmployee] = useState({});
    const [ EmployeeModal, setEmployeeModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [errorModal, setErrorModal] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewEmployee((data) => ({
            ...data,
            [name]: value,
        }))
        console.log(newEmployee)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/employees', newEmployee)
            .then((response) => {
                setEmployeeModal(true)
            })
            .catch((err) => {
                setErrorMessage(err.response.data)
                setErrorModal(true)
            })
    }
    const onCancel = () => {
        navigate('/employees/browse')
    }
    

    return (
        <>
        <article className='add-employee'>
        <section className='add-employee-container'>
            <form className='add-employee-form' onSubmit={handleSubmit}>
                <h1 className='add-employee__title'>Add New Employee</h1>
                <div className='text-container'>
                    <div className='text-container-1'>
                        <div className='add-employee__first-name-container'>
                            <label htmlFor='first_name' className='add-employee__label'>First Name</label>
                            <input 
                                type='text' 
                                name='first_name'
                                className='add-employee__input' 
                                placeholder='First Name'
                                value={newEmployee.firstName}
                                onChange={handleChange}/>
                        </div>
                        <div className='add-employee__last-name-container'>
                            <label htmlFor='last_name' className='add-employee__label'>Last Name</label>
                            <input 
                                type='text' 
                                className='add-employee__input' 
                                placeholder='Last Name'
                                name='last_name'
                                value={newEmployee.lastName}
                                onChange={handleChange}/>
                        </div>
                        <div className='add-employee__birth-date-container'>
                            <label htmlFor='date_of_birth' className='add-employee__label'>Birth Date</label>
                            <input 
                            type='text' 
                            className='add-employee__input' 
                            placeholder='Birth Date'
                            name='date_of_birth'
                            value={newEmployee.birthDate}
                            onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='text-container-2'>
                        <div className='add-employee__phone-container'>
                            <label htmlFor='phone' className='add-employee__label'>Phone Number</label>
                            <input 
                            type='text' 
                            className='add-employee__input' 
                            placeholder='Phone Number'
                            name='phone'
                            value={newEmployee.phone}
                            onChange={handleChange}/>
                        </div>
                        <div className='add-employee__email-container'>
                            <label htmlFor='email' className='add-employee__label'>Email</label>
                            <input 
                            type='text' 
                            className='add-employee__input' 
                            placeholder='Email'
                            name='email'
                            value={newEmployee.email}
                            onChange={handleChange}/>
                        </div>
                        <div className='add-employee__hire-date-container'>
                            <label htmlFor='hire_date' className='add-employee__label'>Hire Date</label>
                            <input
                            type='text' 
                            className='add-employee__input' 
                            placeholder='Hire Date'
                            name='hire_date'
                            value={newEmployee.hireDate}
                            onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div className='add-employee__button-container'>
                    <button type='submit' className='add-employee__submit-button'>Submit</button>
                    <button className='add-employee__cancel-button' onClick={onCancel}>Cancel</button> 
                </div>
            </form>
            {EmployeeModal && createPortal(
                <NewEmployeeModal
                    onClose={()=>{
                        setEmployeeModal(false)
                        navigate('/')}}
                    employeeData={newEmployee}/>,
                document.body
            )}
            {errorModal && createPortal(
                    <ErrorModal 
                        onOk={() => {
                            setErrorModal(false)
                        }}
                        errorMessage={errorMessage}/>,
                    document.body
                )}
        </section>
        </article>
        </>
    )
}

export default AddEmployeePage;