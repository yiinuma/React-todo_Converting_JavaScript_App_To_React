import { useState, useEffect } from 'react';

export function useStorage(localStorageKey) {
  const STORAGE_KEY = localStorageKey;
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    } else {
      setTodoList(JSON.parse(data));
    }
  }, []);

  const putTodoList = (items) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setTodoList(items);
  };

  return [todoList, putTodoList];
}
