import SearchResultsList from '../../components/SearchResults/SearchResults.js';
import SearchBox from '../../components/SearchBox/SearchBox.js';
import SearchBar from '../../components/SearchBar/SearchBar.js';
import { useState } from 'react';
import './SearchPage.scss';

function Search(props) {
    const [employeesList, setEmployeesList]= useState([]);

    return (
        <>
            <article>
                
                <section className='search-page'>
                    <div className='search-options'>
                    <SearchBox setEmployeesList={setEmployeesList}/>
                    <h2 className='search-options__or'>OR</h2>
                    <SearchBar setEmployeesList={setEmployeesList}/>
                    </div>
                    <SearchResultsList employeesList={employeesList} setEmployeesList={setEmployeesList}/>
                </section>
            </article>
        </>
)}

export default Search;