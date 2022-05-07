import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo((props) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const getName = (event) => {
    setName(event.target.value);
  };
  const getAmount = (event) => {
    setAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const get_Name_Amount = {
      title: name,
      amount: amount,
    };
    props.onAddIngredient(get_Name_Amount);
    setName('');
    setAmount('');
  };

  return (
    <section className='ingredient-form'>
      <Card>
        <form onSubmit={submitHandler}>
          <div className='form-control'>
            <input
              type='text'
              id='title'
              placeholder='Name'
              onChange={getName}
              value={name}
            />
          </div>
          <div className='form-control'>
            <input
              type='number'
              id='amount'
              placeholder='Amount'
              onChange={getAmount}
              value={amount}
            />
          </div>
          <div className='ingredient-form__actions'>
            <button type='submit'>Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
