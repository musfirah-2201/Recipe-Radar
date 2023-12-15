import React, {useState} from 'react';
import './MainArea.css';
import RecipeSearchArea from './RecipeSearchArea';
import DisplayArea from './DisplayArea';


function MainArea() {
    const [recipes, setRecipes] = useState([]);
    const handleRecipeSearch = async (SearchItem) => {
        //handle API Call Here
        try{
            const appID = '8b21253b';
            const appKey = 'b9a79913903f983cb6e254997ccd10f7';
            const apiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&beta=false&q='+SearchItem+'&app_id='+appID+'&app_key='+appKey;
            const response = await fetch(apiUrl);
            const data = await response.json();
            //console.log('Actual response:', await response.text());

            // Update state with the fetched recipes
            setRecipes(data.hits);
            console.log("Search item: "+SearchItem);
        }
        catch(error){
            console.log("there is an error!"+error);
        }
        
    }
    return (
        <div className='main-container'>
            <RecipeSearchArea onSearch={handleRecipeSearch}/>
            <DisplayArea recipes = {recipes}/>
        </div>
    );
}

export default MainArea;