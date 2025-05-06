// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
    
    return(
        <div className="ingredient-list-container">
        <ul style={{ width: '45%' }}>
        {props.ingredients.map((oneIngredient)=>
        <li style ={{backgroundColor: oneIngredient.color}} key={oneIngredient.name}>
            <p>{oneIngredient.name}</p>
        <button onClick={()=>{props.onAdd(oneIngredient.name)}}>Add Ingredient</button>
        </li>
        )}
        </ul>
        </div>
    )
  };
  
  export default IngredientList;
  