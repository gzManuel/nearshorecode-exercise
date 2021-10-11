import React, { useEffect, useState } from 'react';

import Button from '../UI/Button';
import { payment } from '../../api/api';
import useHttp from '../../hooks/useHttp';

const FormPayment = ({ userAmount, email }) => {
    const [amount, setAmount] = useState(0);
    const { sendRequest, httpState } = useHttp(payment);

    const payHandler = (event) => {
        event.preventDefault();
        if (amount> 0) {
            sendRequest({ email, amount }).then(()=>{
                setAmount(0);
            })
        }

    }

    return (
        <form onSubmit={payHandler}>
            <label> Current amount </label> <label>$ {userAmount}</label> <br />
            <input type="number" value={amount} onChange={event => setAmount(event.target.value)} /><br />
            <Button >Pay </Button>
        </form>
    );
};

export default FormPayment;