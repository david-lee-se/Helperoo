import { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {createPortal} from 'react-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteEmployeeModal from '../../DeleteEmployeeModal/DeleteEmployeeModal';
import './EmployeeDetailsPage.scss';

function EmployeeDetailsPage() {

    const [singleEmployee, setSingleEmployee] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();


    const openModal = (e) => {
        const employeeId = id
        setShowModal(true);
    }
    useEffect(() => {
        const getEmployeeDetails = async () => {
            try{
                const responseData = await axios.get(`http://localhost:8080/employees/${id}`)
                setSingleEmployee(responseData.data)
            } catch(err) {
                console.log(err)
            }
        }
        getEmployeeDetails();
    }, [id])
    
    return(
        <>
            <section className='employee-details-card'>
                <Link to='#' onClick={openModal} className='employee-details__delete-icon'>
                    <DeleteIcon fontSize="large" color="action"/>
                </Link>
                <h2 className='employee-details__name'>{singleEmployee.first_name} {singleEmployee.last_name}</h2>
                <div className='employee-details__birthday-container'>
                    <h3 className='employee-details__label'>Birthdate</h3>
                    <p className='employee-details__birthday'>{singleEmployee.date_of_birth}</p>
                </div>
                <div className='employee-details__email-container'>
                    <h3 className='employee-details__label'>Email</h3>
                    <p className='employee-details__email'>{singleEmployee.email}</p>
                </div>
                <div className='employee-details__phone-container'>
                    <h3 className='employee-details__label'>Phone Number</h3>
                    <p className='employee-details__phone'>{singleEmployee.phone}</p>
                </div>
                <div className='employee-details__hire-date-container'>
                    <h3 className='employee-details__label'>Hire Date</h3>
                    <p className='employee-details__hire-date'>{singleEmployee.hire_date}</p>
                </div>
                {showModal && createPortal(
                    <DeleteEmployeeModal 
                        onClose={() => {
                            setShowModal(false)
                            navigate('/employees/browse')}}
                        employeeName={singleEmployee.first_name}
                        employeeId = {id}/>,
                    document.body
                )}
            </section>
        </>
    )
}

export default EmployeeDetailsPage;