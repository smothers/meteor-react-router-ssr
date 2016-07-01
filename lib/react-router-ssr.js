import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
checkNpmVersions({
  'react': '15.x',
  'react-dom': '15.x',
  'react-router': '2.x'
}, 'reactrouter:react-router-ssr');

// if (Meteor.isClient) {
// } else {
//   ReactRouterSSR = require('./server.jsx').default;
// }

const ReactRouterSSR = require('./client.jsx').default;

export { ReactRouterSSR }
