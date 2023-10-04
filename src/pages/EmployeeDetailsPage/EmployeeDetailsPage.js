import { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {createPortal} from 'react-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EditIcon from '@mui/icons-material/Edit';
import {lightBlue} from '@mui/material/colors';
import DeleteEmployeeModal from '../../components/DeleteEmployeeModal/DeleteEmployeeModal';
import './EmployeeDetailsPage.scss';
import EditEmployeeModal from '../../components/EditEmployeeModal/EditEmployeeModal';


function EmployeeBrowseDetailsPage({alertModal, setAlertModal, alertMessage, setAlertMessage}) {

    const [singleEmployee, setSingleEmployee] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();


    const openModal = (e) => {
        const employeeId = id
        setShowModal(true);
    }

    const handleEditClick = (e) => {
        const employeeId = id
        setShowEditModal(true);
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
        <article className='employee-details'>
            <section className='employee-details-card'>
                <Link to='/' className='employee-details__back-icon'>
                    <ArrowBackIosNewIcon fontSize='large' sx={{color: lightBlue[500]}}>BACK</ArrowBackIosNewIcon>
                </Link>
                <Link to='#' onClick={openModal} className='employee-details__delete-icon'>
                    <DeleteIcon fontSize="large" color="error"/>
                </Link>
                <Link to='#' onClick={handleEditClick} className='employee-details__edit-icon'>
                    <EditIcon fontSize='large' sx={{color: lightBlue[500]}}/>
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
                            navigate(`/employees/browse`)}}
                        employeeName={singleEmployee.first_name}
                        employeeId = {id}
                        setShowModal = {setShowModal}
                        alertModal={alertModal}
						setAlertModal={setAlertModal}
						alertMessage={alertMessage}
						setAlertMessage={setAlertMessage}/>,
                    document.body
                )}
                {showEditModal && createPortal(
                    <EditEmployeeModal
                        onCancel={() => {
                            setShowEditModal(false)
                        }} 
                        editEmployeeData={singleEmployee}
                        setSingleEmployee={setSingleEmployee}
                        id={id}
                        setShowEditModal={setShowEditModal}/>,
                    document.body
                )}
               
            </section>
        </article>
        </>
    )
}

export default EmployeeBrowseDetailsPage;