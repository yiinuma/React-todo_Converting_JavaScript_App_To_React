import axios from 'axios';
import dayjs from 'dayjs';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';

export const useGetUserData = () => {
  const [userData, setUserData] = useState([]);

  const getLimitDay = useCallback(() => {
    const limitDay = dayjs().format('YYYY-MM-DD');
    return limitDay;
  }, []);

  const getUserData = useCallback(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?userId=1')
      .then((res) => {
        const newArray = [...res.data];
        const apiTodoList = newArray.map((list) => ({
          id: list.id,
          text: list.title,
          limit: getLimitDay(),
          complete: list.completed,
        }));
        setUserData(apiTodoList);
        toast.success('dataを取得しました');
      })

      .catch(() => {
        toast.error('dataを取得できませんでした');
        setUserData([]);
      });
  }, []);

  return [userData, getUserData];
};
