import Button from '../UI/Button';
import classes from './FormEmail.module.css'


const FormEmail = ({email, onSetEmail, onCheckEmail, title }) => {

    return (
        <form onSubmit={onCheckEmail} className={classes.formEmail}>
            <h2> {title} </h2>
            <label> Email </label>
            <input type="email" value={email} onChange={event => onSetEmail(event.target.value) } /><br />
            <Button >Check </Button>
        </form>
    );
};

export default FormEmail;