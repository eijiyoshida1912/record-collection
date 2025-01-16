import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwO4OyxGAaHvSoMpU93EPjtfcU2Un3r0I",
  authDomain: "record-5d9af.firebaseapp.com",
  projectId: "record-5d9af",
  storageBucket: "record-5d9af.firebasestorage.app",
  messagingSenderId: "343152740794",
  appId: "1:343152740794:web:1d1343177192a8e6007583",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// データ追加
export const addRecord = async (record: {
  title: string;
  artist: string;
  genre: string;
  releaseYear: number;
  coverUrl?: string;
}) => {
  await addDoc(collection(db, "records"), record);
};

// データ取得
export const getRecords = async () => {
  const snapshot = await getDocs(collection(db, "records"));
  return snapshot.docs.map((doc) => doc.data());
};
