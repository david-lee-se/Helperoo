import './NewEmployeeModal.scss';

function NewEmployeeModal({employeeData, onClose}) {

    const singleEmployee = employeeData;
    return(
        <section className='new-employee-card'>
            <h1 className='new-employee-card__title'>New Employee Added!!</h1>
            <h2 className='new-employee-card__name'>{singleEmployee.first_name} {singleEmployee.last_name}</h2>
            <div className='new-employee-card__birthday-container'>
                <h3 className='employee-details__label'>Birthdate</h3>
                <p className='employee-details__birthday'>{singleEmployee.date_of_birth}</p>
            </div>
            <div className='new-employee-card__email-container'>
                <h3 className='employee-details__label'>Email</h3>
                <p className='employee-details__email'>{singleEmployee.email}</p>
            </div>
            <div className='new-employee-card__phone-container'>
                <h3 className='employee-details__label'>Phone Number</h3>
                <p className='employee-details__phone'>{singleEmployee.phone}</p>
            </div>
            <div className='new-employee-card__hire-date-container'>
                <h3 className='employee-details__label'>Hire Date</h3>
                <p className='employee-details__hire-date'>{singleEmployee.hire_date}</p>
            </div>
            <div className='new-employee-card__button-container'>
                <button className='new-employee-card__button' onClick={onClose}>OK</button>
            </div>
        </section>
        
    )
}

export default NewEmployeeModal;
