import { firebase } from '../../infrastructure/firebase/firebase';

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
