import { memo } from 'react';
import toast from 'react-hot-toast';

export const Sort = memo((props) => {
  const { todoList, putTodoList } = props;

  const handleSortInput = (target = '') => {
    const sortTodoList = [...todoList].sort((a, b) => new Date(a[target]) - new Date(b[target]));
    let sortName;
    if (target === 'id') {
      sortName = '入力順';
    } else if (target === 'limit') {
      sortName = '期限順';
    }
    toast.success(`${sortName}で並び替えました`);
    putTodoList(sortTodoList);
  };

  return (
    <div className="mt-2 flex flex-row justify-end">
      <button
        onClick={() => handleSortInput('id')}
        className="mt-2 h-10 rounded bg-white px-4 hover:bg-orange-400"
      >
        入力順で並び替え
      </button>
      <button
        onClick={() => handleSortInput('limit')}
        className="mt-2 ml-8 h-10 rounded bg-white px-4 hover:bg-orange-400"
      >
        期限順で並び替え
      </button>
    </div>
  );
});
