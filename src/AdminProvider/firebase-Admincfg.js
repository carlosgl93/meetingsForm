import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  FirebaseRealTimeSaga,
} from "react-admin-firebase";
import firebase from "firebase"

const config = {
  apiKey: "AIzaSyB9dqbocPuFMkV_T7H1jzpC2RYAeQmV4mw",
  authDomain: "networked-events.firebaseapp.com",
  databaseURL: "https://networked-events.firebaseio.com",
  projectId: "networked-events",
  storageBucket: "networked-events.appspot.com",
  messagingSenderId: "1080792888854",
  appId: "1:1080792888854:web:96532f1ec203e336c8e737",
};

const firebaseinit = firebase.initializeApp(config)

const options = {
    // Use a different root document to set your resource collections, by default it uses the root collections of firestore
  //rootRef: 'root-collection/some-doc',
  // Your own, previously initialized firebase app instance
  
  // Enable logging of react-admin-firebase
  logging: true,
  // Resources to watch for realtime updates, will implicitly watch all resources by default, if not set.
  watch: ['posts'],
  // Resources you explicitly dont want realtime updates for
  dontwatch: ['comments'],
  // Authentication persistence, defaults to 'session', options are 'session' | 'local' | 'none'
  persistence: 'session',
  // Disable the metadata; 'createdate', 'lastupdate', 'createdby', 'updatedby'
  disableMeta: false,
  // Prevents document from getting the ID field added as a property
  dontAddIdFieldToDoc: false,
  // Adds 'deleted' meta field for non-destructive deleting functionality
  // NOTE: Hides 'deleted' records from list views unless overridden by filtering for {deleted: true} 
  softDelete: false,
  // Changes meta fields like 'createdby' and 'updatedby' to store user IDs instead of email addresses
  associateUsersById: false,
  // Casing for meta fields like 'createdby' and 'updatedby', defaults to 'lower', options are 'lower' | 'camel' | 'snake' | 'pascal' | 'kebab'
  metaFieldCasing: 'lower',
  // Instead of saving full download url for file, save just relative path and then get download url
  // when getting docs - main use case is handling multiple firebase projects (environments)
  // and moving/copying documents/storage files between them - with relativeFilePaths, download url
  // always point to project own storage
  relativeFilePaths: false, 
  // Add file name to storage path, when set to true the file name is included in the path
  useFileNamesInStorage: false 
};

export const dataProvider = FirebaseDataProvider(config, options);
export const authProvider = FirebaseAuthProvider(config, options);
// export const firebaseRealtime = FirebaseRealTimeSaga(dataProvider, options);
