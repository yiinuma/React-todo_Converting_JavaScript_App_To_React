import { useState, useEffect } from 'react';

export function useStorage(STORAGE_KEY = 'my-todo') {
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

  const clearTodoList = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    setTodoList([]);
  };

  return [todoList, putTodoList, clearTodoList];
}
