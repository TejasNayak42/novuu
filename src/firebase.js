import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtwIsYTaeY8H47-IfTzAAButvVwGwHy1I",
  authDomain: "intelligent-fleet-management.firebaseapp.com",
  projectId: "intelligent-fleet-management",
  storageBucket: "intelligent-fleet-management.appspot.com",
  messagingSenderId: "649302184126",
  appId: "1:649302184126:web:75817f6fc7cf177e580eef",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
