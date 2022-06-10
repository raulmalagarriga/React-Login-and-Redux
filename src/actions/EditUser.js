import { getAuth , updateProfile , updateEmail , reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { types } from "../types/types"; 
import Swal from "sweetalert2";
import { login } from "./auth";

const auth = getAuth();


export const startEditUsername = (username) => {
    return (dispatch) => {
        updateProfile(auth.currentUser , {
            displayName: username
        }).then( () => {
            Swal.fire('Success' , 'Username updated!' , 'success');
            dispatch( editUsername( username ) );
            dispatch( login( auth.currentUser.uid , username ) );
        }).catch( (err) => {
            Swal.fire('Error' , err.message , 'error');
        })
    }
}
export const editUsername = (displayName) => {
    return {
        type: types.editUsername,
        payload: {
            displayName
        }
    }
}
export const startEditEmail = (email) => {
    return (dispatch) => {
        updateEmail(auth.currentUser, email).then(() => {
            Swal.fire('Success' , 'Email updated!' , 'success');
        }).catch((err) => {
            Swal.fire('Error' , err.message , 'error');
        });
    }
}

export const editEmail = (email) => {
    return{
        type: types.editEmail,
        payload: {
            email
        }
    }
}