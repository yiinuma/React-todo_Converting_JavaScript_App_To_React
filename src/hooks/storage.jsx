import { useState, useEffect } from 'react';

const STORAGE_KEY = 'my-todo';

function useStorage() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    } else {
      setTodoList(JSON.parse(data));
    }
  }, []);

  const putTasks = (items) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setTodoList(items);
  };

  return [todoList, putTasks];
}

export default useStorage;
