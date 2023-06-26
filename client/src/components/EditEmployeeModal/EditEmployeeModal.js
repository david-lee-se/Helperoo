import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import './EditEmployeeModal.scss';

function EditEmployeeModal({id, onCancel, editEmployeeData, setShowEditModal, setSingleEmployee}) {

    const [currentEmployee, setCurrentEmployee] = useState({
        first_name: editEmployeeData.first_name,
        last_name: editEmployeeData.last_name,
        phone: editEmployeeData.phone,
        email: editEmployeeData.email,
        hire_date: editEmployeeData.hire_date,
        date_of_birth: editEmployeeData.date_of_birth
    });
    const [updatedEmployee, setUpdatedEmployee] = useState({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        phone: '',
        email: '',
        hire_date: ''
    });

    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const emailInputRef = useRef();
    const phoneInputRef = useRef();
    const hireDateInputRef = useRef();
    const birthDateInputRef = useRef();
    const navigate= useNavigate();

    const handleChange = (e) => {
        const {target} = e;
        if(firstNameInputRef.current) {
            setUpdatedEmployee((prevState) => ({
                ...prevState,
                first_name: firstNameInputRef.current.value
            }))
        }
        if(lastNameInputRef.current) {
            setUpdatedEmployee((prevState) => ({
                ...prevState,
                last_name: lastNameInputRef.current.value
            }))
        }
        if(birthDateInputRef.current) {
            setUpdatedEmployee((prevState) => ({
                ...prevState,
                date_of_birth: birthDateInputRef.current.value
            }))
        }
        if(phoneInputRef.current) {
            setUpdatedEmployee((prevState) => ({
                ...prevState,
                phone: phoneInputRef.current.value
            }))
        }
        if(emailInputRef.current) {
            setUpdatedEmployee((prevState) => ({
                ...prevState,
                email: emailInputRef.current.value
            }))
        }
        if(hireDateInputRef.current) {
            setUpdatedEmployee((prevState) => ({
                ...prevState,
                hire_date: hireDateInputRef.current.value
            }))
        }
    }
    
    const handleEdit = (e) => {
        e.preventDefault();
        const data = {...updatedEmployee, id};
        axios.put(`http://localhost:8080/employees/${id}`, data)
            .then((response) => {
                    setSingleEmployee(response.data)})
            .catch((err) => {
                console.log(err)
            })   
        setShowEditModal(false);
    }

    useEffect(() => {
        if(firstNameInputRef.current) {
            firstNameInputRef.current.value = currentEmployee?.first_name || '';
        }
        if(lastNameInputRef.current) {
            lastNameInputRef.current.value = currentEmployee?.last_name || '';
        }
        if(birthDateInputRef.current) {
            birthDateInputRef.current.value = currentEmployee?.date_of_birth || '';
        }
        if(phoneInputRef.current) {
            phoneInputRef.current.value = currentEmployee?.phone || '';
        }
        if(emailInputRef.current) {
            emailInputRef.current.value = currentEmployee?.email || '';
        }
        if(hireDateInputRef.current) {
            hireDateInputRef.current.value = currentEmployee?.hire_date || '';
        }
    }, [
        currentEmployee.first_name,
        currentEmployee.last_name,
        currentEmployee.phone,
        currentEmployee.email,
        currentEmployee.hire_date,
        currentEmployee.date_of_birth
    ])
    
    return (
        
            <section className='edit-employee-container'>
            <form className='edit-employee-form'>
                <h1 className='edit-employee__title'>Edit Employee</h1>
                <div className='text-container'>
                    <div className='text-container-1'>
                        <div className='edit-employee__first-name-container'>
                            <label htmlFor='first_name' className='edit-employee__label'>First Name</label>
                            <input 
                                type='text' 
                                name='first_name'
                                className='edit-employee__input' 
                                ref={firstNameInputRef}
                                onChange={handleChange}></input>
                        </div>
                        <div className='edit-employee__last-name-container'>
                            <label htmlFor='last_name' className='edit-employee__label'>Last Name</label>
                            <input 
                                type='text' 
                                className='edit-employee__input' 
                                name='last_name'
                                ref={lastNameInputRef}
                                onChange={handleChange}></input>
                        </div>
                        <div className='edit-employee__birth-date-container'>
                            <label htmlFor='date_of_birth' className='edit-employee__label'>Birth Date</label>
                            <input 
                            type='text' 
                            className='edit-employee__input' 
                            name='date_of_birth'
                            ref={birthDateInputRef}
                            onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className='text-container-2'>
                        <div className='edit-employee__phone-container'>
                            <label htmlFor='phone' className='edit-employee__label'>Phone Number</label>
                            <input 
                            type='text' 
                            className='edit-employee__input' 
                            name='phone'
                            ref={phoneInputRef}
                            onChange={handleChange}></input>
                        </div>
                        <div className='edit-employee__email-container'>
                            <label htmlFor='email' className='add-employee__label'>Email</label>
                            <input 
                            type='text' 
                            className='edit-employee__input' 
                            name='email'
                            ref={emailInputRef}
                            onChange={handleChange}></input>
                        </div>
                        <div className='edit-employee__hire-date-container'>
                            <label htmlFor='hire_date' className='edit-employee__label'>Hire Date</label>
                            <input
                            type='text' 
                            className='edit-employee__input' 
                            name='hire_date'
                            ref={hireDateInputRef}
                            onChange={handleChange}></input>
                        </div>
                    </div>
                </div>
                <div className='edit-employee__button-container'>
                    <button className='edit-employee__cancel-button' onClick={onCancel}>Cancel</button> 
                    <button type='submit' onClick={handleEdit}className='edit-employee__submit-button'>Submit</button>
                </div>
            </form>
        </section>
    )
}

export default EditEmployeeModal;