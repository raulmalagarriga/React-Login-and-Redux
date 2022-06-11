import React from 'react';
import { getAuth } from 'firebase/auth';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { startEditEmail, startEditUsername, startRemoveUser, startUpdatePasswords } from '../../actions/EditUser';
import { useForm } from '../../hooks/useForm';
import { startLoginEmailPassword } from '../../actions/auth';

const FormEdit = () => {

    // Get firebase user data
    const auth = getAuth();
    // Redux
    const dispatch = useDispatch();

    // Custom hook for manage forms
    const [Formvalues , handleInputChange ] = useForm({
        username: auth.currentUser.displayName,
        email: auth.currentUser.email,
        password: '',
        repeatPassword: ''
    });
    const { username , email , password , repeatPassword } = Formvalues;
    
    // Functions for edit options
    // Username edit
    const handleUsernameEdit = () => {
        if( username !== '' && username !== auth.currentUser.displayName){
            dispatch( startEditUsername( username ) );
        }else{
            Swal.fire('Error' , 'Please enter a new username' , 'error');
        }
    }
    // Email edit
    const handleEmailEdit = async() => {
        if( validator.isEmail(email) && email !== auth.currentUser.email ){
            // We must to re-login for change user's email
            // SweetAlert config 
            const { value: password } = await Swal.fire({
                title: 'Enter your password',
                input: 'password',
                inputLabel: 'Password',
                inputPlaceholder: 'Enter your password',
                inputAttributes: {
                  maxlength: 10,
                  autocapitalize: 'off',
                  autocorrect: 'off'
                }
              })
              if (password) {
                    // We must to re-login for change user's password
                    await dispatch( startLoginEmailPassword( auth.currentUser.email , password) );
                    dispatch( startEditEmail( email ) );
                }
        }else{
                Swal.fire('Error' , 'Please enter a valid email' , 'error');
        }
    }
    // Password update
    const handleUpdatePassword = async() => {
        if( password === '' ){
            Swal.fire('Error' , 'Write a new password!' , 'error');
            return
        }
        if( password === repeatPassword ){
            const { value: oldPassword } = await Swal.fire({
                title: 'Enter your old password',
                input: 'password',
                inputLabel: 'Password',
                inputPlaceholder: 'Enter your password',
                inputAttributes: {
                  maxlength: 10,
                  autocapitalize: 'off',
                  autocorrect: 'off'
                }
              });
              if (oldPassword) {
                console.log('good');
                // We must to re-login for change user's password
                await dispatch( startLoginEmailPassword( auth.currentUser.email , oldPassword) );
                dispatch( startUpdatePasswords( password ));
            }
        }else{
            Swal.fire('Error' , 'Passwords doesnt match' , 'error');
        }
    }
    // Remove user from firebase
    const handleRemoveUser = async() => {
        // SweetAlert config
        const { value: password } = await Swal.fire({
            title: 'Enter your password to confirm',
            input: 'password',
            inputLabel: 'You are going to delete your account!',
            inputPlaceholder: 'Password',
            inputAttributes: {
                maxlength: 10,
                autocapitalize: 'off',
                autocorrect: 'off'
            }
        });
        if (password) {
            // We must to re-login for change user's password
            await dispatch( startLoginEmailPassword( auth.currentUser.email , password) );
            dispatch( startRemoveUser() );
        }
    }

    return ( 
        <>
            <div className='container'> 
                <h3 className='titles mt-5'>Edit user info</h3>
                <hr />
                <div className='container-form-edit'>
                    <div className='row align-items-center'>
                        <div className='col'>
                            <div className="input-group mb-5">
                                <h4 className='label'>Edit username</h4>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="New username"
                                    name='username'
                                    value={username}
                                    onChange={handleInputChange} 
                                />
                                <button className="btn btn-primary" type="button" onClick={handleUsernameEdit}>
                                    Done
                                </button>
                            </div>
                            <div className="input-group mb-5">
                                <h4 className='label'>Edit email</h4>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="email@email.com"
                                    name='email'
                                    value={email}
                                    onChange={handleInputChange} 
                                />
                                <button className="btn btn-primary" type="button" onClick={handleEmailEdit}>Done</button>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="input-group mb-5">
                                <h4 className='label mb-1'>Update password</h4>
                                <h6 className='label'>Set new password</h6>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="New password"
                                    name='password'
                                    value={password}
                                    onChange={handleInputChange} 
                                />
                            </div>
                            <div className="input-group mb-5">
                                <h6 className='label'>Repeat new password</h6>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Repeat new password"
                                    name='repeatPassword'
                                    value={repeatPassword}
                                    onChange={handleInputChange} 
                                />
                            </div>
                            <button className="btn btn-primary elemt-mid" type="button" onClick={handleUpdatePassword}>Update password</button>
                        </div>
                        <h5 className='label-danger'>Danger zone</h5>
                        <hr />
                        <div className="input-group mb-5">
                                <h6 className='label'>Delete account</h6>
                                <button className="btn btn-danger elemt-mid" type="button" onClick={handleRemoveUser}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default FormEdit;