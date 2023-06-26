import '../AlertModal/AlertModal.scss';

function ErrorModal({errorMessage, onOk}) {

    
    return(
        <>
            <section className='alert-modal'>
                <h1 className='alert-modal__text'>{errorMessage}</h1>
                <button className='alert-modal__ok' onClick={onOk}>OK</button>
            </section>
        </>
    )
}

export default ErrorModal;