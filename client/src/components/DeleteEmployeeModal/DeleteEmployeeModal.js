import axios from 'axios';
import AlertModal from '../../components/AlertModal/AlertModal';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router';
import './DeleteEmployeeModal.scss';
import { useState } from 'react';

function DeleteEmployeeModal(
            {  
                employeeId, 
                employeeName, 
                setShowModal, 
                setAlertMessage, 
                alertMessage, 
                alertModal, 
                setAlertModal
            }) {


    const navigate= useNavigate();

    const onDelete = () => {
        axios.delete(`http://localhost:8080/employees/${employeeId}`)
            .then(response => {
                setAlertMessage(`Deleted ${employeeName} from database.`)
                setAlertModal(true)
                navigate('/employees/browse')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onCancel = () => {
        setShowModal(false)
    }
    return (
        <>
        <section className='delete-modal'>
            <div className='delete-modal__card'>
                <div className='delete-modal__text-container'>
                    <h1 className='delete-modal__title'>Delete Employee?</h1>
                    <p className='delete-modal__body'>Are you sure you want to delete {employeeName}? <strong>This cannot be undone.</strong></p>
                </div>
                <div className='delete-modal__button-container'>
                    <button className='delete-modal__cancel' onClick={onCancel}>Cancel</button>
                    <button className='delete-modal__delete' onClick={onDelete}>Delete</button>
                </div>
            {alertModal && createPortal(
                    <AlertModal 
                        onClose={() => {
                            setAlertModal(false)
                            navigate('/employees/browse')
                        }}
                        alertMessage={alertMessage}/>,
                    document.body
                )}
            </div>
        </section>
        </>
    )
}

export default DeleteEmployeeModal;