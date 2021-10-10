import { useEffect, useState } from 'react';


import useHttp from './hooks/useHttp';
import FormEmail from "./components/Forms/FormEmail";
import FormPayment from './components/Forms/FormPayment';
import Layout from "./components/Layout/Layout";

import { checkEmail } from './api/api';
import Spinner from './components/UI/Spinner';
import Modal from './components/UI/Modal';
import Button from './components/UI/Button';

function App() {

  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showFormPayment, setShowFormPayment] = useState(false);

  const { sendRequest: senRequestCheck, httpState: httpStateCheck } = useHttp(checkEmail);

  const checkStatus = () => {
    return httpStateCheck.status !== 'not send' && httpStateCheck.status !== 'completed'
  }
  useEffect(() => {
    // If is sent request and there isn't found a user.
    
    if (email.length !== 0) {

      console.log(Object.keys(httpStateCheck.data).length)
      console.log(httpStateCheck.status)

      if (httpStateCheck.status === "completed" && Object.keys(httpStateCheck.data).length !== 0) {
        setShowFormPayment(true);

        console.log("hey")
      }
      if (httpStateCheck.status==="completed" && Object.keys(httpStateCheck.data).length === 0) {
        console.log('hey you')
        setShowModal(true);
      }
    }
  }, [httpStateCheck])

  const checkEmailHandler = async (event) => {
    event.preventDefault();
    if (email.length!==0) {
      senRequestCheck({ email });
    }
  }

  if (checkStatus() ) {
    return <Spinner />;
  }

  return (
    <Layout>
      <FormEmail email={email} onSetEmail={setEmail} onCheckEmail={checkEmailHandler} title={"Check if you have debs"} >
      </FormEmail>

      <Modal show={showModal} onCancel={() => { setShowModal(false) }} title={"User is not found"} >
        <Button onClick={() => { setShowModal(false) }}>Cancel</Button>
      </Modal>

      <Modal show={showFormPayment} onCancel={() => { setShowFormPayment(false) }} title={`Your Balance ${email}`} >
        
         {(httpStateCheck.status === "completed" && Object.keys(httpStateCheck.data).length !== 0)&&
         <FormPayment email={email} userAmount={httpStateCheck.data.amount}/>}

        <Button onClick={() => { setShowFormPayment(false) }}>Cancel </Button>
      </Modal>

    </Layout>
  );
}

export default App;
