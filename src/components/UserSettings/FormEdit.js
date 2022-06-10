import { getAuth } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startEditEmail, startEditUsername } from '../../actions/EditUser';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

const FormEdit = () => {
    
    const dispatch = useDispatch();
    const [Formvalues , handleInputChange , reset] = useForm({
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    });
    const auth = getAuth();
    console.log(auth.currentUser.email)
    const { username , email , password , repeatPassword } = Formvalues;
    
    const handleUsernameEdit = () => {
        console.log(username)
        if( username !== ''){
            dispatch( startEditUsername( username ) );
        }else{
            Swal.fire('Error' , 'Please enter a new username' , 'error');
        }
    }
    const handleEmailEdit = () => {
        console.log(username)
        if( validator.isEmail(email) ){
            dispatch( startEditEmail( email ) );
        }else{
            Swal.fire('Error' , 'Please enter a valid email' , 'error');
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
                                    type="text" 
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
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Repeat new password"
                                    name='repeatPassword'
                                    value={repeatPassword}
                                    onChange={handleInputChange} 
                                />
                            </div>
                            <button className="btn btn-primary elemt-mid" type="button" id="button-addon1">Update password</button>
                        </div>
                        <h5 className='label-danger'>Danger zone</h5>
                        <hr />
                        <div className="input-group mb-5">
                                <h6 className='label'>Delete account</h6>
                                <button className="btn btn-danger elemt-mid" type="button" id="button-addon1">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default FormEdit;