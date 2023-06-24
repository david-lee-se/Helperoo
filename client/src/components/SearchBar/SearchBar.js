import { useRef, useState} from 'react';
import { MenuItem, Select } from '@mui/material';
import axios from 'axios';
import './SearchBar.scss';



function SearchBar(props) {
    const[category, setCategory]= useState("Select Category");
    const formRef = useRef();
    const setEmployeesList = props.setEmployeesList;

    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }
    const handleChange = (e) => {
        e.preventDefault();
        const formEl= formRef.current;
        const categoryQuery = `category=${category}`;
        const searchTerm= `searchTerm=${formEl.search.value}`;
        console.log(searchTerm)
        axios.get(`http://localhost:8080/employees/search?${categoryQuery}&${searchTerm}`)
            .then((res) => {
                setEmployeesList(res.data)
            })
    }

    return (
        <>
        <form ref={formRef} className='search-bar-container'>
            <Select
                className='search-bar__category'
                variant="standard"
                name='category'
                disableUnderline
                value={category}
                onChange={handleCategoryChange}>
                    <MenuItem value={"Select Category"}>Select Category</MenuItem>
                    <MenuItem value={"first_name"}>First Name</MenuItem>
                    <MenuItem value={"last_name"}>Last Name</MenuItem>
                    <MenuItem value={"email"}>Email</MenuItem>
                    <MenuItem value={"phone"}>Phone Number</MenuItem>
                    <MenuItem value={"date_of_birth"}>Birth Date</MenuItem>
                    <MenuItem value={"hire_date"}>Hire Date</MenuItem>
                </Select>
                <input className='search-bar' type='text' name='search' onChange={handleChange} placeholder='Search'/>
        </form>
        </>
    )
}

export default SearchBar;