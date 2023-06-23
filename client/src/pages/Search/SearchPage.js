import SearchResultsList from '../../components/SearchResults/SearchResults.js';
import SearchBox from '../../components/SearchBox/SearchBox.js';
import { useState } from 'react';
import './SearchPage.scss';

function Search(props) {
    const [employeesList, setEmployeesList]= useState([]);

    return (
        <>
            <article>
                <section className='search-page'>
                    <SearchBox setEmployeesList={setEmployeesList}/>
                    <SearchResultsList employeesList={employeesList} setEmployeesList={setEmployeesList}/>
                </section>
            </article>
        </>
)}

export default Search;