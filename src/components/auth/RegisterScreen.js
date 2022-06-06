import React from 'react';
import validator from 'validator';
import Swal from 'sweetalert2';
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
      // Redux
      const dispatch = useDispatch();
      const [formValues , handleInputChange]  = useForm({
            name: '',
            email: '',
            password: '',
            password2: ''
        });
        const { name , email , password , password2} = formValues;
        
        const handleRegister = (e) => {
            e.preventDefault();
            console.log(name , email , password , password2);
            if( isFormValid() ){
                dispatch(startRegister(name, email, password));
            }
        }
        // Valid form
        const isFormValid = () => {
            if(name.trim().length === 0){
                dispatch(setError('Name is required'));
                Swal.fire('Error' , 'Name is required' , 'error');
                return false; 
            }else if(!validator.isEmail(email)){
                dispatch(setError('Valid email required'));
                Swal.fire('Error' , 'Valid email is required' , 'error');
                return false;
            }else if(password !== password2 || password.length < 5){
                dispatch(setError('Passwords doesnt match or are too short'));
                Swal.fire('Error' , 'Passwords doesnt match or are too short' , 'error');
                return false;
            }
            dispatch(removeError());
    
            return true;
        }
    

      
  return (
    <div className='auth__main'>
      <div className='auth__box-container'>
            <h3 className='auth__tittle mb-5'>Create an account</h3>
            <form>
              <input 
                      type='text'
                      placeholder='Name'
                      name='name'
                      className='auth__input'
                      autoComplete='off'
                      onChange={handleInputChange}
                      value={name}
                />
                <input 
                      type='text'
                      placeholder='email'
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
                <input 
                      type='password'
                      placeholder='Confirm password'
                      name='password2'
                      className='auth__input'
                      onChange={handleInputChange}
                      value={[password2]}
                />
                <button type='submit' onClick={handleRegister} className='btn btn-primary btn-block mb-5'>Register</button>

                <Link to='/auth/login' className='link'>Already registered?</Link>
            </form>
        </div>
    </div>
  )
}
