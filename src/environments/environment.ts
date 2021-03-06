// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  cognito: {
    userPool: {
      UserPoolId: 'ap-south-1_aV5Z84vI4',
      ClientId: 'gomj5s06udff5lbd0l18dapru',
      region: 'ap-south-1'
    },
      identityPoolId: 'ap-south-1:36dcb49d-2522-443c-9c12-1b7666fc9955'
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
