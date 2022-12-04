import {
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    setDoc,
  } from "firebase/firestore";
  import { firestore } from "./firebase-config";
  
  export const saveItem = async (data) => {
    await setDoc(doc(firestore, "events", `${Date.now()}`), data, {
      merge: true,
    });
  };
  
  export const getAllEvetns = async () => {
    const items = await getDocs(query(collection(firestore, "events")));
    return items.docs.map((doc) => doc.data());
  };