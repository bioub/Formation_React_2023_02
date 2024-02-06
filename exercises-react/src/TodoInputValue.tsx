type Props = Readonly<{
  readonly title: string;
}>;

function TodoInputValue({ title }: Props) {
  return <input type="text" className="TodoInputValue" value={title} />;
}

export default TodoInputValue;
