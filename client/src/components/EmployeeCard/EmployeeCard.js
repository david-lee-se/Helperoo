import './EmployeeCard.scss';

function EmployeeCard(props) {


    return (
        <>
            <div className='card-container'>
                <h2 className='card__name'>Brandon Craig</h2>
                <p className='card__birthday'>05/06/1977</p>
                <p className='card__email'>email@email.com</p>
                <p className='card__phone'>158-658-2547</p>
                <p className='card__hire-date'>03/05/2022</p>
            </div>
        </>
    )
}

export default EmployeeCard;

