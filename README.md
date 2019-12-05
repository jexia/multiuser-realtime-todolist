# Multi user real-time Todo app.
Example application: Multi user real-time Todo list is an Jexia's Real Time Communication application using [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8. and material design.

## Features
 - Material Design components for Angular
 - Jexia:
   - Project integration
   - Dataset CRUD operations
   - Authentication service
   - Real Time Communication

## Built With
### Dependencies
| Name| Description | |
|--|--|:--:| 
|[@angular/cdk]|Angular Material Component Development Kit|🎨
|[@angular/material]|Angular Material|🎨
|[@fortawesome/angular-fontawesome]|The iconic font, CSS, and SVG framework|🎨
|[@fortawesome/fontawesome-svg-core]|Angular Fontawesome, an Angular library|🎨
|[@fortawesome/free-solid-svg-icons]|The iconic font, CSS, and SVG framework|🎨
|[bootstrap]|The most popular front-end framework for developing responsive, mobile first projects on the web.|📱
|[hammerjs]|A javascript library for multi-touch gestures|📚
|[jexia-sdk-js]|Awesome Jexia Javascript SDK|🐝
|[jquery]|JavaScript library for DOM operations|📚
|[lodash-es]|Lodash exported as ES modules.|🛠️
|[moment]|Parse, validate, manipulate, and display dates|📅
|[ngx-moment]|Moment.JS pipes for Angular (timeago and more)|🛠️
|[ngx-socket-io]|Socket.IO module for Angular|🛠️
|[node-fetch]|A light-weight module that brings window.fetch to node.js|🛠️
|[popper.js]|A kickass library to manage your poppers|🛠️
|[process]|process information for node.js and browsers|🛠️
|[ws]|Simple to use, blazing fast and thoroughly tested websocket client and server for Node.js|🛠️

### Development Dependencies
| Name| Description | |
|--|--|:--:| 
|[@types/lodash-es]|TypeScript definitions for lodash-es|📚


## Installation & Setup
### Clone repository
```
git clone git@github.com:jexia/multiuser-realtime-todolist.git
cd multiuser-realtime-todolist
```

### Install dependencies
```
npm install
```
### Setup Jexia project
```
1. Create project
2. Create dataset named [todos] with these fields: 
[
  {
    "field_name": "todo",
    "field_type": "string",
    "is_required": "true"
  },
  {
    "field_name": "order",
    "field_type": "integer",
    "is_required": "true"
  },
  {
    "field_name": "completed",
    "field_type": "boolean",
    "is_required": "true"
  },
  {
    "field_name": "due",
    "field_type": "date",
    "is_required": "false"
  },
  {
    "field_name": "user_id",
    "field_type": "string",
    "is_required": "false"
  }
]
3. Create dataset named [users] with these fields:
[
  {
    "field_name": "user_id",
    "field_type": "string",
    "is_required": "true"
  },
  {
    "field_name": "first_name",
    "field_type": "string",
    "is_required": "true"
  },
  {
    "field_name": "last_name",
    "field_type": "string",
    "is_required": "true"
  }
]
4. Create RTC channel named [todo]
5. Create API-key
6. Create CRUD policy for all users and all datasets
7. Update [/multiuser-realtime-todolist/src/environments/environment.prod.ts] with your project-id, API-key and API-secret:
export const environment = {
    production: true,
      jexia: {
        projectID: 'your-project-id',
        projectURL: 'https://your-project-id.app.jexia.com',
        wsURL: 'wss://your-project-id.app.jexia.com/rtc',
        key: 'your-API-key',
        secret: 'your-API-secret'
      }
};
8. Do the same for [environment.ts]

```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
## License
[MIT](./LICENSE) &copy; jexia
