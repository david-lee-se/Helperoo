import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './DeleteEmployeeModal.scss';

function DeleteEmployeeModal({ onClose, employeeId, employeeName}) {

    const navigate = useNavigate();

    const onDelete = () => {
        axios.delete(`http://localhost:8080/employees/${employeeId}`)
            .then(response => {
                alert(`Deleted ${employeeName} from database.`)
            })
            .catch(err => {
                console.log(err)
            })
        onClose();
        navigate('/browse');
    }
    return (
        <>
        <section className='delete-modal'>
            <div className='delete-modal__card'>
                <div className='delete-modal__text-container'>
                    <h1 className='delete-modal__title'>Delete Employee?</h1>
                    <p className='delete-modal__body'>Are you sure you want to delete {employeeName}? This cannot be undone.</p>
                </div>
                <div className='delete-modal__button-container'>
                    <button className='delete-modal__cancel' onClick={onClose}>Cancel</button>
                    <button className='delete-modal__delete' onClick={onDelete}>Delete</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default DeleteEmployeeModal;