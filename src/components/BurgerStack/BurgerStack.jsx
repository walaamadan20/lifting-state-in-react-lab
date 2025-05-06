// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
    return (
        <div className="stack-container">
      <ul style={{ width: '45%' }}>
        {props.ingredients.length === 0 ? (
          <li>No Ingredients</li>
        ) : (
          props.ingredients.map((oneIngredient, index) => (
            <li style={{ backgroundColor: oneIngredient.color }} key={index}>
              <p>{oneIngredient.name}</p>
              <button onClick={() => props.onRemove(index)}>Remove Ingredient</button>
            </li>
          ))
        )}
      </ul>
      </div>
    );
  };
  
  export default BurgerStack;
  