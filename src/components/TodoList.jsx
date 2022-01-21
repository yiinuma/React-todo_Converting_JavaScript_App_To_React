/* eslint-disable react/prop-types */
import { FaEdit, FaCheck, FaTrashAlt } from 'react-icons/fa';

export function TodoList(props) {
  const { todoList, setTodoList, modal, setModal, setEditIndex } = props;

  const checkLimit = (todoLimit) => {
    const now = new Date();
    const formatNow = `${now.getFullYear()}-${`0${now.getMonth() + 1}`.slice(-2)}-${now.getDate()}`;

    const keepTheDeliveryDate = new Date(todoLimit) - new Date(formatNow) >= 0;
    return keepTheDeliveryDate;
  };

  const handleComplete = (id) => {
    setTodoList(
      todoList.map((list) => {
        if (id === list.id) {
          return {
            ...list,
            complete: !list.complete,
          };
        }
        return list;
      }),
    );
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleEdit = (index) => {
    // setEditItem(todoList.filter((list) => id === list.id));
    setEditIndex(index);
    setModal(!modal);
  };

  return (
    <ul className="todo-list mt-8 w-full">
      {todoList.map((list, index) => (
        <li
          className={`todo-item ${list.complete ? 'completed' : ''}`}
          key={list.id}
          data-limit={checkLimit(list.limit)}
        >
          <div className="todo-div">
            <p className="todo-todo">{list.text}</p>
            <div className="todo-task">
              <p className="todo-date">
                期限:{list.limit}
                {checkLimit(list.limit) ? (
                  ''
                ) : (
                  <span className="limit-over">期限が過ぎています！！</span>
                )}
              </p>
              <div>
                <button onClick={() => handleEdit(index)} className="edit-btn">
                  <i className="pointer-events-none">
                    <FaEdit />
                  </i>
                </button>
                <button onClick={() => handleComplete(list.id)} className="complete-btn">
                  <i className="pointer-events-none">
                    <FaCheck />
                  </i>
                </button>
                <button onClick={() => handleDelete(list.id)} className="trash-btn">
                  <i className="pointer-events-none">
                    <FaTrashAlt />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
