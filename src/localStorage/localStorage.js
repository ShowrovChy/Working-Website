const AddToDb = (item) => {
  const db = getDb();

  if (item in db) {
    db[item] = db[item] + 1;
  } else {
    db[item] = 1;
  }
  saveToDb(db);
};
const saveToDb = (db) => {
  const dbJSON = JSON.stringify(db);
  localStorage.setItem("cart", dbJSON);
};

const RemoveFromDb = (item) => {
  const db = getDb();
  delete db[item];
  saveToDb(db);
};

const getDb = () => {
  let savedDb = localStorage.getItem("cart");
  savedDb = JSON.parse(savedDb);
  if (!savedDb) {
    return {};
  }
  return savedDb;
};

export { AddToDb, RemoveFromDb, getDb };
