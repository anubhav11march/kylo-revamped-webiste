import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPwZhEl91kjdyNFvrQBdM9A3-46Uc0wuk",
  authDomain: "eternity-kyloapps.firebaseapp.com",
  projectId: "eternity-kyloapps",
  storageBucket: "eternity-kyloapps.appspot.com",
  messagingSenderId: "781726725437",
  appId: "1:781726725437:web:1fc0f498aba349df78c154",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
