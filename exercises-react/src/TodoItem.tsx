import TodoSpanValue from './TodoSpanValue';
import { Todo } from './model';

type Props = Readonly<{
  todo: Todo;
}>;

function TodoItem({ todo }: Props) {
  return (
    <div className="TodoItem" data-todo-id={String(todo.id)}>
      <input type="checkbox" className="todosCompleted" defaultChecked={todo.completed} />
      <TodoSpanValue title={todo.title} />
      <button className="todosDeleteBtn">-</button>
    </div>
  );
}

export default TodoItem;
