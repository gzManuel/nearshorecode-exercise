
const DOMAIN = 'http://localhost:3333';

// const options = {
//     Headers : {
//         'Content-Type': 'application/json'
//     }
// };

export const checkEmail= async(email)=>{

    const response = await fetch(`${DOMAIN}/information`, {
        method:'Post',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body:JSON.stringify(email)
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
}