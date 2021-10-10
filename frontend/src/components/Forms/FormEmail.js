
import { useEffect, useState } from 'react';

import Button from '../UI/Button';
import {checkEmail} from '../../api/api';
import Spinner from '../UI/Spinner';
import Modal from '../UI/Modal';

const FormEmail = ({email, onSetEmail, onCheckEmail }) => {

    
    return (
        <form onSubmit={onCheckEmail}>
            <label> Email </label><br />
            <input type="email" value={email} onChange={event => onSetEmail(event.target.value) } /><br />
            <Button >Check </Button>
        </form>
    );
};

export default FormEmail;