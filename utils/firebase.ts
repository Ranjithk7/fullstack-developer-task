import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJRffnNKqA0Fn74yG-S5D-rYTMw0C4TkU",
  authDomain: "fullstack-article-view.firebaseapp.com",
  projectId: "fullstack-article-view",
  storageBucket: "fullstack-article-view.firebasestorage.app",
  messagingSenderId: "812689979878",
  appId: "1:812689979878:web:de773631d20f2d73f2be27",
  measurementId: "G-FCCLBRR7RC"
};

const app = initializeApp(firebaseConfig);
export const userAuth = getAuth(app);
