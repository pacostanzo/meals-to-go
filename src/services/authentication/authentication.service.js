import { firebase } from '../../infrastructure/firebase/firebase';

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const registerRequest = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const ssoUser = (user) => firebase.auth().onAuthStateChanged(user);

export const signOut = () => firebase.auth().signOut();
