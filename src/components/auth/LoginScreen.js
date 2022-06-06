import React from 'react'
import validator from 'validator';
import Swal from 'sweetalert2';
import { useDispatch  } from 'react-redux';
import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';

export const LoginScreen = () => {
    
    const dispatch = useDispatch();
    const [ Formvalues , handleInputChange ] = useForm({
        email: '',
        password: ''
    });
    const { email , password } = Formvalues;

    const handleGoogleLogIn = () => {
        dispatch( startGoogleLogin() );
    }
    const handleLogInWithEmailPassword = (e) => {
        e.preventDefault();
        if(isFormValid()){
            dispatch( startLoginEmailPassword(email , password) );
        }
    }

    // Valid form
    const isFormValid = () => {
        if(email.trim().length === 0){
            dispatch(setError('Email is required'));
            Swal.fire('Error' , 'Email is required' , 'error');
            return false; 
        }else if(!validator.isEmail(email)){
            dispatch(setError('Valid email required'));
            Swal.fire('Error' , 'Valid email required' , 'error');
            return false;
        }else if(password.trim().length < 1){
            dispatch(setError('Password is required'));
            Swal.fire('Error' , 'Password is required' , 'error');
        }

        dispatch(removeError());

        return true;
    }
    return (
    <div className='auth__main'>
        <div className='auth__box-container'>
            <h3 className='auth__tittle mb-5'>Login</h3>
            <form onSubmit={handleLogInWithEmailPassword}>
                    <input 
                        type='text'
                        placeholder='Email'
                        name='email'
                        className='auth__input'
                        autoComplete='off'
                        onChange={handleInputChange}
                        value={email}
                    />
                    <input 
                        type='password'
                        placeholder='Password'
                        name='password'
                        className='auth__input'
                        onChange={handleInputChange}
                        value={password}
                    />
                    <button 
                        type='submit' 
                        className='btn btn-primary btn-block'
                        >
                            Login
                    </button>

                    <div className='auth__social-networks'>
                        <p>Login with social networks</p>
                        <div className="google-btn" onClick={handleGoogleLogIn}>
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            </div>
                            <p className="btn-text">
                                <b>Sign in with google</b>
                            </p>
                        </div>
                    </div>
                    <Link to='/auth/register' className='link'>Create a new account</Link>
            </form>
        </div>
    </div>
  )
}
