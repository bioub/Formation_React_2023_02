# Exercices

## JSX

Convert that HTML to JSX in `App.tsx` :

```
<form class="todos-form">
  <input type="checkbox" class="todos-toggle-checked">
  <input type="text" class="todos-new-input">
  <button>+</button>
</form>
<div class="todos-container"></div>
```

Then create 3 components in separate `.tsx` files :
- `TodoItem` (to replace `createTodo`)
- `TodoSpanValue` (to replace `createSpanValue`)
- `TodoInputValue` (to replace `createInputValue`)

```
export function createTodo() {
  const rowEl = document.createElement('div');
  rowEl.className = 'todosItem';
  rowEl.dataset.todoId = '123abc';

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = 'todosCompleted';
  checkboxEl.checked = true;

  const spanEl = createSpanValue();

  const buttonEl = document.createElement('button');
  buttonEl.className = 'todosDeleteBtn';
  buttonEl.innerText = '-';

  rowEl.append(checkboxEl, ' ', spanEl, ' ', buttonEl);

  return rowEl;
}

export function createSpanValue() {
  const spanEl = document.createElement('span');
  spanEl.className = 'todosSpanValue';
  spanEl.innerText = 'ABC';
  return spanEl;
}

export function createInputValue() {
  const inputEl = document.createElement('input');
  inputEl.className = 'todosInputValue';
  inputEl.value = 'ABC';
  return inputEl;
}
```

Tips :

- The innerText properties will be replaced by writing inside an Element in JSX :
e.g. : `<button>-</button>`

- `rowEl.dataset.todoId` will be converted : `<div data-todo-id="">`


Then use `TodoItem` 3 times in `App`

```
<div class="todos-container">
  <TodoItem />
  <TodoItem />
  <TodoItem />
</div>
```

## Props

Déclare one prop called `todo` in `TodoItem`.

```
<TodoItem todo={} >
```

This prop is an object containing 3 keys/properties :
- `id` with type `number`
- `title` with type `string`
- `completed` with type `boolean`

In the `App` component pass a different todo object to `<TodoItem />` for instance :

```
{ id: Math.random(), title: 'ABC', completed: false }
```

Then modify the code of `TodoItem` component :
- pass the `id` key to `data-todo-id`
- assign `completed` to the `checked` property of the checkbox
- pass `title` as a prop of the `<TodoSpanValue />` component

Then déclare a prop named `title` in `TodoSpanValue` and show it inside the `<span>` element

Do the same in `TodoInputValue` which is not used yet.

## Conditional JSX and Lists

Add a prop `isEditing` in the `TodoItem` component, the prop should optionnal (using ? in TypeScript), of type boolean and default to `false`.

In the JSX of `TodoItem` if `isEditing` equals `false`, show the `TodoSpanValue` component, if `isEditing` equals `true` show the `TodoInputValue` component instead.

Test with `App` that components show an input if we pass `isEditing={true}` or `isEditing={false}` to `TodoItem`

In `App` add to variables at the beginning of the component :

```
const todos = [
  { id: 123, title: 'ABC', completed: false },
  { id: 456, title: 'DEF', completed: true },
  { id: 987, title: 'XYZ', completed: false },
];
const editingId = 456;
```

Then modify the JSX of `App` so it shows todos in sync with thoses variables
(the second one should be in editing mode)

## Event and State

Update `App` so that `todos` is using the state (with `useState`)

Add a new state `newTodo` (with default valeur `'ABC'`) and pass `newTodo` to the `value` property of the input text : `<input type="text" className="todos-new-input" />`

Then listen with `onChange` the new values typed into the field and update `newTodo` (with `setNewTodo`) the value using `event.target.value` (see slide 82)

The listen to the submit event of the form (`onSubmit`), the call `event.preventDefault()` to disable the default behavior of the browser.

Then use `setTodos` in the `handleSubmit` (or the name of the callback associated with onSubmit) to add a new element in the array :

```
setTodos(
  [
    ...todos,
    { /*  a new object with 3 keys : id (Math.random()), title (value from the field) et completed (false)  */ }
  ]
)
```

Listen to the click of this checkbox :
`<input type="checkbox" className="todos-toggle-checked" />`

Check or uncheck all the checkboxes in `TodoItem`.