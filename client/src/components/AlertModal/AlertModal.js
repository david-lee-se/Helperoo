import './AlertModal.scss';

function AlertModal({alertMessage, onClose}) {

    
    return(
        <>
            <section className='alert-modal'>
                <h1 className='alert-modal__text'>{alertMessage}</h1>
                <button className='alert-modal__ok' onClick={onClose}>OK</button>
            </section>
        </>
    )
}

export default AlertModal;