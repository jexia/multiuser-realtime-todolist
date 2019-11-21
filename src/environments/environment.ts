// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  jexia: {
    projectID: 'c2d98878-b188-4756-8579-6cbe74013ab0',
    projectURL: 'https://c2d98878-b188-4756-8579-6cbe74013ab0.app.jexia.com',
    wsURL: 'wss://c2d98878-b188-4756-8579-6cbe74013ab0.app.jexia.com/rtc',
    key: `${process.env.API_KEY}`,
    secret: `${process.env.API_SECRET}`
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
