export class User {
  static default = new User(false);
  constructor(public signedIn: boolean, public username?: string, public userId?: string, public idToken?: string) { }
}
export interface SignupData {
  username?: string;
  password?: string;
  newPassword?: string;
  verificationCode?: string;
}

export interface SignupForm extends SignupData {
  confirmPassword?: string;
}


export interface S3ConfigParams {
  bucketName: string;
  folderPath?: string;
}


