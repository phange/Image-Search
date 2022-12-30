import { useState } from "react";
import './SearchBar.css'

// takes away the value of the input from browser and moving control to the React state system
// normally we want function SearchBar(props), but since we want a specific prop called onSubmit, we pass in {onSubmit} instead
function SearchBar({onSubmit}){

    // below code takes control of value in the form from the browser and controls it using state system in React
    const[term, setTerm] = useState('');

    // event handler, whenever called, passes data to parent component
    const handleFormSubmit = (event) => {
        event.preventDefault(); // stops browser from reloading the current page

        onSubmit(term);
    };

    // event handler required for any change to the input text box
    const handleChange = (event) => {
        console.log(event.target.value);
        setTerm(event.target.value)
    };
    
    // form allows child to parent communication
    // the challenge is how do we get data from the form input?
    // Need to read the value of the input? Look at 'term' state
    // Need to update the value of the input? Call setTerm('XXX')
    return (
        <div className="search-bar">
        {/* sends data to parent */}
        <form onSubmit={handleFormSubmit}> 
            <label>Enter Search Term</label>
            <input value={term} onChange={handleChange}/>  
        </form>
        </div>
    );
}

export default SearchBar;