import Swal from 'sweetalert2';
import { types } from "../types/types"
import { getAuth, signInWithPopup, createUserWithEmailAndPassword 
, updateProfile , signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebase-config';
import { finishLoading, startLoading } from "./ui";

// Firebase authentication
const auth = getAuth();

export const startLoginEmailPassword = ( email , password ) => {
    //Retrun a callback
    return ( dispatch ) => {
        dispatch( startLoading() );
        signInWithEmailAndPassword( auth, email, password )
        .then( async({ user }) => {
            await dispatch( login(user.uid , user.displayName) );
            dispatch( finishLoading() );
            console.log('login successful');
        }).catch(  err   => {
            console.log( err );
            Swal.fire('Error' , err.message , 'error');
            dispatch( finishLoading() );
            return;
        })
    }
}
// when we have an async task, we have to return the dispatch. 
// We have access to dispatch thansk a thunk extension
export const startGoogleLogin = () => {
    return (dispatch) => {
        
        signInWithPopup(auth, googleAuthProvider)
        .then(({user}) =>{
            console.log(user);
            dispatch(login(user.uid, user.displayName))
        });
    }
}

export const startRegister = (name , email , password) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then( async({user}) => {
            await updateProfile( user , { displayName: name });
            console.log(user);
            dispatch(
                login(user.uid , user.displayName)
            )
            Swal.fire('Success' , 'User registered!' , 'success');
        }).catch((err) => {
            console.log(err);
            Swal.fire('Error' , err.message , 'error');
        })
    }
}

export const login = (uid , displayName) => {
    return {
        type: types.login,
        payload: {
            uid, 
            displayName
        }
    }
}

export const startLogOut = () => {
    return async( dispatch ) => {
        await signOut( auth );
        dispatch( logOut() );
    }
}

export const logOut = () => {
    return {
        type: types.logout
    }
}