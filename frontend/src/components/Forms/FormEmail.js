
import { useEffect, useState } from 'react';

import Button from '../UI/Button';
import {checkEmail} from '../../api/api';
import useHttp from '../hooks/useHttp';
import Spinner from '../UI/Spinner';
import Modal from '../UI/Modal';

const FormEmail = () => {
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);
    const {sendRequest,httpState} = useHttp(checkEmail)

    const checkStatus=()=>{
        return httpState.status!=='not send' && httpState.status !=='completed'
    }

    useEffect(()=>{
        console.log(httpState.data);
        if(httpState.status==="completed"&& !httpState.data) setShowModal(true)
    },[httpState])
    
    const checkEmailHandler =  async (event)=>{
        event.preventDefault();
        sendRequest({email});
    }

    

    if(checkStatus()){
        return <Spinner/>;
    }

    console.log('rendering')
    return (
        <form onSubmit={checkEmailHandler}>
            <label> Email </label><br />
            <input type="text" value={email} onChange={event => setEmail(event.target.value) } /><br />
            <Button >Check </Button>
            <Modal show={showModal} onCancel={()=>{setShowModal(false)}} title={"User is not found"} >
                <Button onClick={()=>{setShowModal(false)}}>Cancel</Button>
            </Modal>

        </form>
    );
};

export default FormEmail;