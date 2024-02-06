import TodoInputValue from './TodoInputValue';
import TodoSpanValue from './TodoSpanValue';
import { Todo } from './model';

type Props = Readonly<{
  todo: Todo;
  isEditing?: boolean;
}>;

function TodoItem({ todo, isEditing = false }: Props) {
  return (
    <div className="TodoItem" data-todo-id={String(todo.id)}>
      <input type="checkbox" className="todosCompleted" checked={todo.completed} readOnly />
      {isEditing ? <TodoInputValue title={todo.title} /> : <TodoSpanValue title={todo.title} />}
      <button className="todosDeleteBtn">-</button>
    </div>
  );
}

export default TodoItem;
