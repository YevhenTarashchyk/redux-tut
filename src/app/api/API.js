import { db } from '../../config/fbConfig';

export const fetchPhones = async () => {
  const dbRef = await db.collection('phones').get();
  return dbRef.docs.map(doc => doc.data());
};

export const fetchPhoneById = async id => {
  const selected = await db
    .collection('phones')
    .where('id', '==', id)
    .get();
  return selected.docs.map(doc => doc.data());
};

export const fetchCategories = async () => {
  const dbRef = await db.collection('categories').get();
  return dbRef.docs.map(doc => doc.data());
};
