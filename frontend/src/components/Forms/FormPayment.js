import React, { useState } from 'react';

import Button from '../UI/Button';
import {payment} from '../../api/api';
import useHttp from '../../hooks/useHttp';

const FormPayment = ({userAmount, email}) => {
    const { sendRequest: payment, httpState: httpStatePayment } = useHttp();
    const [amount,setAmount]= useState();
    const {sendRequest, httpState} = useHttp(payment);
    
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