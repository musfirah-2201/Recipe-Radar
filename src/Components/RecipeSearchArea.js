import React, {useState} from "react";
import './RecipeSearchArea.css';

function RecipeSearchArea({onSearch}){
    const [searchitem,setSearchItem] = useState('');
    const handlesearch = () =>{
        onSearch(searchitem);
    }
    return(
    <div className="container">
        <input 
            className="searchArea" 
            type="text" 
            placeholder="Search for recipes here..."  
            value={searchitem} 
            onChange={(e)=>setSearchItem(e.target.value)} 
        />

        <br/>

        <button onClick={handlesearch}>
            Search
        </button>

    </div>);
}

export default RecipeSearchArea;