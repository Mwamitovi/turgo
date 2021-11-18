# turgo (v0.0.1)

Managing user information while running on top of REST APIs, using ES6, [React](https://facebook.github.io/react/) and [Material Design](https://material.io/).<br/>
And our building blocks are powered by [react-admin](https://github.com/marmelab/react-admin), an open sourced project, maintained by [marmelab](https://marmelab.com/).<br/>

## Features

* Adapts to any backend (REST, GraphQL, SOAP, etc.)
* Powered by [material-ui](https://material-ui.com/), [redux](https://redux.js.org/), [react-final-form](https://final-form.org/react), [react-router](https://reacttraining.com/react-router/) and a few more
* Super-fast UI thanks to optimistic rendering (renders before the server returns)
* Undo updates and deletes for a few seconds
* Relationships (many to one, one to many)
* Data Validation
* Internationalization (i18n)
* Conditional formatting
* Supports any authentication provider (REST API, OAuth, Basic Auth, ...)
* Full-featured Datagrid (sort, pagination, filters)
* Filter-as-you-type
* Can connect to multiple backends

## How do I get set up?
In the project directory, you can run:

### Clone the repo:
$ `git clone https://github.com/Mwamitovi/turgo.git`

### Navigate to the root folder of the repo:
$ `cd turgo`

### Install the required dependencies:
$ `npm install`

This will install all the files upon which this project depends.

### Start the App:
$ `npm start`

This will run the command to check linting, and also serve up the app on
http://localhost:3000.<br/>The page will reload if you make edits. You will also see any lint errors in the console.

$ `npm run prettier`

Launches the prettier engine to format all the files within the "src" folder.<br />

$ `npm test`

Launches the test runner in the interactive watch mode.<br />

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Contribution Guildelines

- Code Review
- Writing unit tests
- Other guidelines shall be issued with time