import React, { useState } from 'react';

import Button from '../UI/Button';

const FormPayment = ({userAmount}) => {
    const [amount,setAmount]= useState();
    
    const payHandler = (event)=>{
        event.preventDefault();
    }

    return (
        <form onSubmit={payHandler}>
            <label> Current amount </label> <label>$ {userAmount}</label> <br />
            <input type="text" value={amount} onChange={event => setAmount(event.target.value)} /><br />
            <Button >Pay </Button>
        </form>
    );
};

export default FormPayment;