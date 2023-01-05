import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  addDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../services/firebase/index";

export const getProducts = async (categoryId) => {
  const collectionRef = categoryId
    ? query(collection(db, "products"), where("category", "==", categoryId))
    : collection(db, "products");
  return await getDocs(collectionRef);
};

export const getProductById = async (productId) => {
  const itemRef = doc(db, "products", productId);
  return await getDoc(itemRef);
};

export const createOrder = async (order) => {
  const ordersCollection = collection(db, "orders");
  return await addDoc(ordersCollection, order);
};

export const updateProduct = async (productId, changes) => {
  const itemRef = doc(db, "products", productId);
  return await updateDoc(itemRef, changes);
};
