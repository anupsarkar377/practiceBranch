import { Injectable } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';


Amplify.configure({
  Auth: {
    region: 'ap-south-1',
    identityPoolId: 'ap-south-1:36dcb49d-2522-443c-9c12-1b7666fc9955',
    userPoolId: 'ap-south-1_aV5Z84vI4',
    userPoolWebClientId: 'gomj5s06udff5lbd0l18dapru'
  }
});

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  async signin(user) {
    console.log('signin user: ', JSON.stringify(user));
    const username = user.username;
    const password = user.password;

    console.log(username, password);
    try {
      const signedInUser = await Auth.signIn(username, password);
      console.log('Signed in user after aws calling', signedInUser);
      return signedInUser;
    } catch (error) {
      return error;
    }
  }


  async confirmSignin(user) {
    const newPassword = user.newPassword;
    const confirmPassword = user.confirmPassword;
    try {
      // this.signin()
      const confirmSignin = await Auth.confirmSignIn(newPassword, confirmPassword);
      console.log('Signed in user after aws calling', confirmSignin);
      return confirmSignin;
    } catch (error) {
      return error;
    }

  }

}
