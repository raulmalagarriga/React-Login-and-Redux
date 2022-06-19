import { getAuth , updateProfile , updateEmail, updatePassword, deleteUser, signInWithEmailAndPassword } from "firebase/auth";
import { types } from "../types/types"; 
import Swal from "sweetalert2";
import { login, startLogOut } from "./auth";

// Get firebase data user
const auth = getAuth();

// Edit username
export const startEditUsername = (username) => {
    return async( dispatch ) => {
        await updateProfile( auth.currentUser , {
            displayName: username
        }).then( () => {
            dispatch( editUsername( username ) );
            dispatch( login( auth.currentUser.uid , username ) );
            Swal.fire('Success' , 'Username updated!' , 'success');
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
// Edit email
export const startEditEmail = ( email ) => {
    return async( dispatch ) => {
        await updateEmail(auth.currentUser, email).then(() => {
            
            dispatch( editEmail( email ));
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
// Update passwords
export const startUpdatePasswords = ( password ) => {
    return async( ) => {
        
        await updatePassword( auth.currentUser, password ).then(() => {
            
            Swal.fire('Success' , 'Password updated!' , 'success');
          }).catch((err) => {
            Swal.fire('Error' , err.message , 'error');
          });
          
    }
}
// Remove user account
export const startRemoveUser = ( password ) => {
    return async( dispatch ) => {
        // console.log(auth.currentUser.metadata);
        signInWithEmailAndPassword( auth, auth.currentUser.email, password )
        .then(
            await deleteUser( auth.currentUser ).then(() => {
                Swal.fire('Success' , 'Account removed!' , 'success');
                dispatch( startLogOut() );
            }).catch((err) => {
                Swal.fire('Error' , err.message + 'Try again please' , 'error');             
            })
        )
    }
}