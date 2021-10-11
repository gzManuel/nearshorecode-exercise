
const DOMAIN = 'http://localhost:3333';

export const checkEmail= async(email)=>{
    const response = await fetch(`${DOMAIN}/information`, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(email)
    });
    const jsonResponse = await response.json();
    return jsonResponse;
}

export const payment = async (payment)=> {
    
    const response = await fetch(`${DOMAIN}/payments`, {
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(payment)
    });
    const jsonResponse = await response.json();
    return jsonResponse;
}