import * as _ from '~/services/stash';
// import firebase from 'firebase';
// import '@firebase/firestore';
// import ReduxSagaFirebase from 'redux-saga-firebase';

// https://redux-saga-firebase.js.org/reference/dev/firestore#channel
// https://console.firebase.google.com/project/my-dashboard-15a55/database/firestore/data~2Ftask~2F0I1lE2oD1S3qokg9LNnJ
// https://redux-saga.js.org/docs/advanced/Channels.html

const config =
  'kHsjCCAHiwaYZQSI8gAdhBAUBJAgZ6EApgghAUA5AgBaEAHQgQDKAJnYGDQgEoCBlgAFmATQIAWggAMCDAM4CAZgBkqC0AoADdggDGAgsYETwQBgBgRAFAehmAbwECAAoGBywKACgRADARayABQcBG4IAoQwCQhATMAwAYErrwA1aAHMAJNoFQEwOgxgAHrAABeBCmcAHOoBvVQASHgH8JAMSWABFsATN4BDg4CAB4AAKoAAKYC0JoATLoCEE4AJt4AXgIC1UYA4NoC6OYA8u4A/PoBCQYA4Q4AFB4BGK4Atx4A6hIAAK4AHNYATJYA2DIBTNIC4t4A7OYC9vIC9PoA3x4CrE4CDOoAHH4AVEICAJVWA4ZOA4rWAZFSA5daAxT+ABDeAEyuAotuAIseAt4eAaTeAn7OAhw6ANjKAuoeANGAAG4AkFAAcgAAUgJBugEC0gGOygCPPgPlFgCAqgMCZgJ/vgIJAgHuDQAATIAzuEAgmiAPolAAIGgDYDQBGwYBQIkA+kCAWDtANHpgEShQAlHoB+A0AQbGAF1jABvRgEKKwCV2IATAMAAqyAEcBAJkSgHwiQBgA4AiGsAD0SAAAjAAiKAHRAAATQA==';
_.stash(config);

// console.log();

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const rsf = new ReduxSagaFirebase(firebaseApp);
const rsf = {};

export default rsf;
