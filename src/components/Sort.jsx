import { memo } from 'react';
import toast from 'react-hot-toast';
import { PrimaryButton } from './button/PrimaryButton';

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
      <PrimaryButton onClick={() => handleSortInput('id')}>入力順で並び替え</PrimaryButton>
      <PrimaryButton onClick={() => handleSortInput('limit')}>期限順で並び替え</PrimaryButton>
    </div>
  );
});
