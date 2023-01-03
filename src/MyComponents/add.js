// import React from 'react'
// import Actn from './actn'
// export default function Add(props) {
//     var dataa  = [
//         {
//     sno : `${props.count}`,
//     attach : `https://picsum.photos/20${props.vip}/3000`,
//     src : `    <img src={src${props.count}} alt="Random"/>`,
//     },
//     ]
//   return (
//     <div>
// <img src={`https://picsum.photos/20${props.vip}/3000`} alt="" />
// <h1>Hiiiii</h1>
//     </div>
//   )
// }
import React from 'react'
import { useState } from 'react';
const Formm = () => {
    const [recipe, setRecipe] = useState("");
    const [ingrediens, setIngrediens] = useState("");
    const [foodList, setFoodList] = useState([]);
  
    const handleChangeRecipe = event => {
      setRecipe(event.target.value);
    };
    const handleChangeIngredients = event => {
      setIngrediens(event.target.value);
    };
    const handleClick = event => {
      setFoodList([...foodList, { recipe: recipe, ingrediens: ingrediens }]);
    };
  
    console.log(foodList);
    return (
      <main>
        <button onClick={handleClick}>add</button>
        <div className="form">
          <input
            type="text"
            placeholder="Enter your recipe"
            name="recipe"
            onChange={handleChangeRecipe}
          />
          <input
            type="text"
            placeholder="Enter your ingrediens"
            name="ingrediens"
            onChange={handleChangeIngredients}
          />
        </div>
  
        <div className="results">
          <ul>
            {foodList.map((x, i) => (
              <li key={i}>
                {" "}
                {x.recipe} <p> {x.ingrediens} </p>{" "}
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
  };
  export default Formm;