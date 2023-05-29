import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit() {
  return (
    <div className='recipe-edit'>
        <div className='recipe-edit__remove-button-container'>
            <button className='btn recipe-edit__remove-button'>&times;</button>
        </div>
        <div className='recipe-edit__details-grid'>
            <label className='recipe-edit__label' htmlFor='name'>Name</label>
            <input 
            type='text' 
            name='name' 
            id='name'
            className='recipe-edit__input'
            />
            <label className='recipe-edit__label' htmlFor='cookTime'>Cook Time</label>
            <input 
            type='text' 
            name='cookTime' 
            id='cookTime'
            className='recipe-edit__input'
            />
            <label className='recipe-edit__label' htmlFor='servings'>Servings</label>
            <input 
            type='number' 
            min="1" 
            name='servings' 
            id='servings'
            className='recipe-edit__input'
            />
            <label className='recipe-edit__label' htmlFor='instructions'>Instructions</label>
            <textarea 
            name='instructions' 
            id='instructions'
            className='recipe-edit__input'
            ></textarea>
        </div>
        <br/>
        <label className='recipe-edit__label'>Ingredients</label>
        <div className='recipe-edit__ingredient-grid'>
            <div>Name</div>
            <div>Amount</div>
            <div></div>
            <RecipeIngredientEdit/>
            <RecipeIngredientEdit/>
        </div>
        <div className='recipe-edit__add-ingredient-btn-container'>
            <button className='btn btn--primary'>Add Ingredient</button>
        </div>
    </div>
  )
}
