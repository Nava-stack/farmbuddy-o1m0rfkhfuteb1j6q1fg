import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  addCategory,
  removeCategory,
  updateCategoryColor,
} from "./Store/taskCategorySlice";
import { db } from "./Store/firebaseConfig";
import { store } from "./Store/configureStore";

// Firestore collection reference
const categoriesCollectionRef = collection(db, "farms");

// Add a new category
export const addCategoryToFirebase = async (category) => {
  try {
    const docRef = await addDoc(categoriesCollectionRef, category);
    // Dispatch Redux action to add category
    store.dispatch(addCategory({ ...category, id: docRef.id }));
  } catch (error) {
    console.error("Error adding category: ", error);
  }
};

// Update a category's name
export const updateCategoryColorInFirebase = async (id, name) => {
  const categoryDoc = doc(db, "farms", id);
  try {
    await updateDoc(categoryDoc, { name: name });
    // Dispatch Redux action to update category name
    store.dispatch(updateCategoryColor({ id, name: name }));
  } catch (error) {
    console.error("Error updating category name: ", error);
  }
};

// Delete a category
export const deleteCategoryFromFirebase = async (id) => {
  const categoryDoc = doc(db, "farms", id);
  try {
    await deleteDoc(categoryDoc);
    // Dispatch Redux action to remove category
    store.dispatch(removeCategory(id));
  } catch (error) {
    console.error("Error removing category: ", error);
  }
};
