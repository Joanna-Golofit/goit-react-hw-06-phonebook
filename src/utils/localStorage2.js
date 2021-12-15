const addToLocalStorage2 = (newData) => {
  const oldLocalStoreData = JSON.parse(localStorage.getItem("contacts")) || [];
  const newLocalStoreData = [...oldLocalStoreData, newData];
  const stringifiedNewData = JSON.stringify(newLocalStoreData);
  localStorage.setItem("contacts", stringifiedNewData);
};

export { addToLocalStorage2 };