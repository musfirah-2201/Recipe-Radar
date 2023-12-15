import React from 'react';

function DisplayArea({recipes}) {
    return ( 
            <div className='list-container'>
                <ul>
                {recipes.map((hit) => (
                    <li key={hit.recipe.uri}>
                        <h3>{hit.recipe.label}</h3>
                        <p>Source: {hit.recipe.source}</p>
                        <a href={hit.recipe.url} target='_blank'>find recepi here!</a>
                        {/* Add more details as needed */}
                    </li>
                    ))}
                </ul>
            </div>
     );
}

export default DisplayArea;