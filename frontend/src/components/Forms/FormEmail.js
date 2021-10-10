
import { useState } from 'react';

import Button from '../UI/Button';
const FormEmail = () => {
    const {email, setEmail} = useState('');

    const checkEmailHandler = (event)=>{
        event.preventDefault();

    }
    return (
        <form onSubmit={checkEmailHandler}>
            <label> Email </label><br />
            <input type="text" value={email} onChange={event => { setEmail(event.target.value) }} /><br />
            <Button >Check </Button>
        </form>
    );
};

export default FormEmail;