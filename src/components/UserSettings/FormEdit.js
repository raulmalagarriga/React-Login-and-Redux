import React from 'react';

const FormEdit = () => {
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
                                />
                                <button className="btn btn-primary" type="button" id="button-addon1">Done</button>
                            </div>
                            <div className="input-group mb-5">
                                <h4 className='label'>Edit email</h4>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="email@email.com" 
                                />
                                <button className="btn btn-primary" type="button" id="button-addon1">Done</button>
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
                                />
                            </div>
                            <div className="input-group mb-5">
                                <h6 className='label'>Repeat new password</h6>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Repeat new password" 
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